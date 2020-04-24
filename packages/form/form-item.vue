<template>
  <div class="dist-form-item">
    <label
      class="dist-form-item__label"
      :style="{ width: this.Form.labelWidth }"
      >{{ label }}</label
    >
    <div class="dist-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "distFormItem",
  inject: ["Form"],
  props: {
    label: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.dist-form-item {
  margin-bottom: 25px;
  .dist-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .dist-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>
