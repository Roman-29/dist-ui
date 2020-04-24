<template>
  <div class="dist-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "distForm",
  props: {
    model: {
      type: Object,
      required: true // 必须传model进来
    },
    labelWidth: {
      type: String,
      default: "80px"
    }
  },
  provide() {
    return {
      Form: this
    };
  }
};
</script>

<style></style>
