<template>
  <label class="dist-checkbox" :class="{ 'is-check': ischeck }">
    <span class="dist-checkbox__input">
      <span class="dist-checkbox__inner"></span>
      <input
        type="checkbox"
        class="dist-checkbox__original"
        :name="name"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="dist-checkbox__label">
      <slot></slot>
      <span v-if="!$slots.default">{{ label }}</span>
    </span>
  </label>
</template>

<script>
// 注意点（非Gruop）
// 1. input标签实行了v-model="model" 当input发生change的时候，model会被修改触发set函数
// 2. set函数emit了input事件，导致父组件v-model的属性发生改变
// 3. 因为计算函数model的值就是父组件v-model传来的值，所以会重新计算model
// 4. 根据model从新判断is-check

// 注意点(Group)
// 1. inject和provide跨级组件通信,拿到父组件，
// 2. input标签实行了v-model="model"  model是父组件从爷爷组件v-model来的一个数组
// 3. 当input发生change，因为model是数组，会增加或删除发生change的input的value值
// 4. set函数emit了父组件的input事件，导致爷爷组件v-model的数组发生改变
// 5. 因为计算函数model的值就是爷爷组件v-model传来的值，所以会重新计算model
// 5. 根据model从新判断is-check

export default {
  name: "distCheckbox",
  inject: {
    checkboxGroup: {
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.checkboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.checkboxGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    // 判断是否被group包裹
    isGroup() {
      return !!this.checkboxGroup;
    },

    ischeck() {
      // 如果是group包裹，判断是否在model中
      return this.isGroup ? this.model.includes(this.label) : this.model;
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
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
.dist-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .dist-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .dist-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .dist-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .dist-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.dist-checkbox.is-check {
  .dist-checkbox__input {
    .dist-checkbox__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .dist-checkbox__label {
    color: #409eff;
  }
}
</style>
