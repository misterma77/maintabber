<template>
  <tabber>
    <tabberitem path="/home" activecolor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div>
    </tabberitem>
    <tabberitem path="/category">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt />
      <div slot="item-text">分类</div>
    </tabberitem>
    <tabberitem path="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt />
      <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tabberitem>
    <tabberitem path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tabberitem>
  </tabber>
</template>

<script>
import tabber from "@/components/tabbar/tabBar";
import tabberitem from "./tabbar/tabBerItem";

export default {
  components: {
    tabber,
    tabberitem
  }
};
</script>

<style>
</style>