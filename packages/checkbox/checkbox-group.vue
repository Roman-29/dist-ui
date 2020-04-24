<template>
  <div class="dist-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "distCheckboxGroup",
  provide() {
    return {
      checkboxGroup: this
    };
  },
  props: {
    value: {
      type: Array
    }
  }
};
</script>

<style></style>
