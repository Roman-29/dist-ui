<template>
  <div class="dist-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "distRadioGroup",
  provide() {
    return {
      radioGroup: this
    };
  },
  props: {
    value: null
  }
};
</script>

<style></style>
