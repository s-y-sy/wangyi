<template>
  <div>
    <div>

<van-tabbar route>
  <van-tabbar-item replace to="/homepage" icon="home-o">
   首页
  </van-tabbar-item>
  <van-tabbar-item replace to="/classification" icon="apps-o">
    分类
  </van-tabbar-item>
  <van-tabbar-item replace to="/buy" icon="photo-o">
    值得买
  </van-tabbar-item>
  <van-tabbar-item replace to="/shopping" icon="shopping-cart-o">
    购物车
  </van-tabbar-item>
  <van-tabbar-item replace to="/prson" icon="manager-o">
    个人
  </van-tabbar-item>
</van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang='stylus'>

</style>