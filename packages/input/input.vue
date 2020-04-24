<template>
  <div class="dist-input" :class="{ 'dist-input--suffix': showSuffix }">
    <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      class="dist-input__inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="dist-input__suffix" v-if="showSuffix">
      <i
        class="dist-input__icon el-icon-circle-close"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="dist-input__icon el-icon-view"
        v-if="showPassword"
        @click="handlePassword"
        :class="{ 'dist-input-view-active': passwordVisible }"
      ></i>
    </span>
  </div>
</template>

<script>
// 注意点：
// 1. type属性通过函数判断确定

export default {
  name: "distInput",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 控制密码框是否显示密码
      passwordVisible: false
    };
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    }
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>

<style lang="scss">
.dist-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .dist-input__inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.dist-input--suffix {
  .dist-input__inner {
    padding-right: 30px;
  }
  .dist-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .dist-input-view-active {
      color: #409eff;
    }
  }
}
</style>
