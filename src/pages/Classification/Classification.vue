<template>
  <div>
    <van-search v-model="value"
                placeholder="请输入搜索关键词" />
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="推荐专区" to="/classification/tuijian">
        </van-sidebar-item>
      <van-sidebar-item title="宅家防护" />
      <van-sidebar-item title="爆品专区" />
      <van-sidebar-item title="新品专区" />
      <van-sidebar-item title="居家生活" />
      <van-sidebar-item title="服饰鞋包" />
      <van-sidebar-item title="美食酒水" />
      <van-sidebar-item title="个护清洁" />
      <van-sidebar-item title="母婴亲子" />
      <van-sidebar-item title="运动旅行" />
      <van-sidebar-item title="数码家电" />
      <van-sidebar-item title="全球特色" />
    </van-sidebar>
   
  </div>
</template>

<script>
export default {
  name:'Classification',
  data() {
    return {
      activeKey: 0
    };
  }
}
</script>

<style lang='stylus'></style>