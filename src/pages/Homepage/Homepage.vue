<template>
  <div>
    <div class="header">
      <p>网易严选</p>
      <van-search v-model="value"
                  input-align="center"
                  placeholder="请输入搜索关键词" />
      <van-button color="red"
                  plain
                  size="mini">登录</van-button>
    </div>
    <div class="header-nav">
      <ul class="right-navs">
        <li class="active">
          <a href="">推荐</a>
        </li>
        <li>
          <a href="">居家生活</a>
        </li>
        <li>
          <a href="">服饰鞋包</a>
        </li>
        <li>
          <a href="">美食酒水</a>
        </li>
      </ul>
      <div class="left-navs">
        <a href="">
          <span>^</span>
        </a>
      </div>
    </div>
    <div class="swipe">
      <van-swipe :autoplay="3000" class="my-swipe">
        <van-swipe-item v-for="(image, index) in images"
                        :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="swipe-botter">
      <ul class="swipe-botter-list">
        <li>
          <span class="iconfont icon-icon-test2"></span>
          <p>网易自营品牌</p>
        </li>
        <li>
          <i></i>
          <p>30天无忧退货</p>
        </li>
        <li>
          <i></i>
          <p>48小时快速退款</p>
        </li>
      </ul>
    </div>
    <div class="shop">
      <ul class="shoplists">
        <li class="shopitem">
         <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
          <p>新品首发</p>
        </li>
        <li class="shopitem">
          <img class="img" src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$1.0.0">
          <p>居家生活</p>
        </li>
        <li class="shopitem">
          <img class="img" src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$2.0.0">
          <p>服饰鞋包</p>
        </li>
        <li class="shopitem">
         <img class="img" src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$3.0.0">
          <p>美食酒水</p>
        </li>
        <li class="shopitem">
         <img class="img" src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$4.0.0">
          <p>个护清洁</p>
        </li>
        <li class="shopitem">
         <img class="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$5.0.0">
          <p>母婴亲子</p>
        </li>
        <li class="shopitem">
         <img class="img" src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$6.0.0">
          <p>运动旅行</p>
        </li>
        <li class="shopitem">
          <img class="img" src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$7.0.0">
          <p>数码家电</p>
        </li>
        <li class="shopitem">
          <img class="img" src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$8.0.0">
          <p>全球特色</p>
        </li>
        <li class="shopitem">
          <img class="img" src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" data-reactid=".0.4.0.0.0.0.$0/=1$0.$9.0.0">
          <p>好货抄底</p>
        </li>
      </ul>
    </div>
    <div class="qqimg">
      <img src="../../../static/img/QQ截图20200308124242.png" alt="">
    </div>
    <div class="newperson">
      <div class="newperson-header">
        <p>-</p>
        <p>新人专享礼</p>
        <p>-</p>
      </div>
      <div class="newperson-foot">
        <div class="newperson-foot-right">
          <p>新人专享礼包</p>
          <img data-original="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" data-src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" class="swiper-lazy" data-reactid=".0.4.2.1.0.1.0.0" src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" style="display: inline;">
        </div>
        <div class="newperson-foot-left">
          <div class="newperson-foot-left-top">
            <p>新人社</p>
            <p>今日特价</p>
            <img data-original="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200" data-src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.4.2.1.1.0.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200" style="display: inline;">
          </div>
           <div class="newperson-foot-left-botter">
             <p>新人拼团</p>
             <a href="">1元起包邮</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      images: [
        "https://yanxuan.nosdn.127.net/ec370e24d936af6032758590523aa430.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0"
      ]
    }
  }
}
</script>

<style lang='stylus'>
.header
  margin 5px
  display flex
  justify-content space-around
  align-items center
  p
    font-size 14px
  input
    padding 3px
.header-nav
  display flex
  justify-content space-between
  padding 5px
  .right-navs
    display flex
    li
      margin 0px 5px
.my-swipe
  .van-swipe-item
    img
      width 370px
      height 150px
.swipe-botter
  .swipe-botter-list
    display flex
    justify-content space-around
    li
      font-size 12px
.shoplists
  display flex
  flex-wrap wrap
  justify-content space-around
  .shopitem
    display flex
    flex-direction column
    justify-content center

    img
      width 40px
      height 40px
      margin-bottom 3px
    p
      font-size 12px
      margin-top 3px 

.qqimg
  img
    width 100%
    margin-top 3px
.newperson
  width 100%
  .newperson-header
    display flex
    justify-content center
    p
      margin 3px
.newperson-foot
  display flex
  .newperson-foot-right
    background-color #F9E9CF
    padding 20px
    img 
      width 100px
      height 100px
      margin-top 10px
  .newperson-foot-left
    margin 0 6px
    width 200px
    .newperson-foot-left-top
      padding 10px
      margin-bottom 6px
      height 60px
      background-color #F9E9CF
      img 
        width 50px
        height 50px
    .newperson-foot-left-botter
      background-color #F9E9CF
    

</style>