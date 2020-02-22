<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isactive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isactive: true
    };
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activestyle() {
      return this.isactive ? { color: this.activecolor } : {};
      // return "1";
    }
  },
  methods: {
    itemclick() {
      // console.log(typeof this.$route.path);
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin: 3px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 3px;
}
</style>