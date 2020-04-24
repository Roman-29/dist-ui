<template>
  <transition name="dialog-show">
    <div
      class="dist-dialog__wrapper"
      v-show="visible"
      @click.self="handerClose"
    >
      <div class="dist-dialog" :style="{ width, 'margin-top': top }">
        <div class="dist-dialog__header">
          <slot name="title">
            <span class="dist-dialog__title">
              默认标题
            </span>
          </slot>
          <button class="dist-dialog__headerbtn" @click="handerClose">
            <i class="el-icon-close"></i>
          </button>
        </div>
        <div class="dist-dialog__body">
          <slot>
            <span>默认内容</span>
          </slot>
        </div>
        <div class="dist-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// 注意点：
// 1. 使用sync update修饰符对visible这个来自父组件的属性进行控制，实现父子组件该属性同步
// 2. @click.self 只当事件在该元素本身（而不是子元素）才会触发
// 3. $slots.XX判断是否传入插槽
// 4. Vue动画效果

export default {
  name: "distDialog",
  props: {
    width: {
      type: String,
      default: "30%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    title: {
      type: String,
      default: "默认标题"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handerClose() {
      this.$emit("close");
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss">
.dist-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .dist-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .dist-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .dist-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-show-enter-active {
  animation: show 0.5s;
}

.dialog-show-leave-active {
  animation: show 0.5s reverse;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
