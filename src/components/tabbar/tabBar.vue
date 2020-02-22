<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style >
#tab-bar {
  display: flex;
  background-color: #dadada;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -3px 10px rgba(100, 100, 100, 0.5);
}
</style>