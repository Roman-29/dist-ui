<template>
  <label class="dist-radio" :class="{ 'is-check': label === model }">
    <span class="dist-radio__input">
      <span class="dist-radio__inner"></span>
      <input
        type="radio"
        class="dist-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="dist-radio__label">
      <slot></slot>
      <span v-if="!$slots.default">{{ label }}</span>
    </span></label
  >
</template>

<script>
// 注意点（非Gruop）
// 1. input标签实行了v-model="model" 当input发生change的时候，model会被修改触发set函数
// 2. set函数emit了input事件，导致父组件v-model的属性发生改变
// 3. 因为计算函数model的值就是父组件v-model传来的值，所以会重新计算model
// 4. 根据model从新判断is-check

// 注意点(Group)
// 1. inject和provide跨级组件通信,拿到父组件
// 2. input标签实行了v-model="model" 当input发生change的时候，model会被修改触发set函数
// 3. set函数emit了父组件的input事件，导致爷爷组件v-model的属性发生改变
// 4. 因为计算函数model的值就是爷爷组件v-model传来的值，所以会重新计算model
// 5. 根据model从新判断is-check

export default {
  name: "distRadio",
  inject: {
    radioGroup: {
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.radioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.radioGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    // 判断radio是否被group包裹
    isGroup() {
      return !!this.radioGroup;
    }
  },
  props: {
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: null
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.dist-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .dist-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .dist-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .dist-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .dist-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.dist-radio.is-check {
  .dist-radio__input {
    .dist-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .dist-radio__label {
    color: #409eff;
  }
}
</style>
