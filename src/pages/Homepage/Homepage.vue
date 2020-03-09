<template>
  <div class="app">
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
      <van-swipe :autoplay="3000"
                 class="my-swipe">
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
          <img class="img"
               src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
          <p>新品首发</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$1.0.0">
          <p>居家生活</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$2.0.0">
          <p>服饰鞋包</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$3.0.0">
          <p>美食酒水</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$4.0.0">
          <p>个护清洁</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$5.0.0">
          <p>母婴亲子</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$6.0.0">
          <p>运动旅行</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$7.0.0">
          <p>数码家电</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$8.0.0">
          <p>全球特色</p>
        </li>
        <li class="shopitem">
          <img class="img"
               src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"
               data-reactid=".0.4.0.0.0.0.$0/=1$0.$9.0.0">
          <p>好货抄底</p>
        </li>
      </ul>
    </div>
    <div class="qqimg">
      <img src="../../../static/img/QQ截图20200308124242.png"
           alt="">
    </div>
    <!--新人-->
    <div class="newperson">
      <div class="newperson-header">
        <p>-</p>
        <p>新人专享礼</p>
        <p>-</p>
      </div>
      <div class="newperson-foot">
        <div class="newperson-foot-right">
          <p>新人专享礼包</p>
          <img data-original="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
               data-src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
               class="swiper-lazy"
               data-reactid=".0.4.2.1.0.1.0.0"
               src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
               style="display: inline;">
        </div>
        <div class="newperson-foot-left">
          <div class="newperson-foot-left-top">
            <p>新人社</p>
            <p>今日特价</p>
            <img data-original="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 data-src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.2.1.1.0.0.0.0.0"
                 src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </div>
          <div class="newperson-foot-left-botter">
            <p>新人拼团</p>
            <a href="">1元起包邮</a>
          </div>
        </div>
      </div>
    </div>
    <!--热销-->
    <div class="listhot">
      <h4>类目热销榜</h4>
      <div class="listhot-top">
        <div class="listhot-top-left">
          <span>热销榜</span>
          <img data-original="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
               data-src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
               class="swiper-lazy"
               data-reactid=".0.4.3.1.0.$0.1.0.0"
               src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
               style="display: inline;">
        </div>
        <div class="listhot-top-right">
          <span>好评榜</span>
          <img data-original="https://yanxuan-item.nosdn.127.net/48da70a44ef09ed4d646287573db2c44.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
               data-src="https://yanxuan-item.nosdn.127.net/48da70a44ef09ed4d646287573db2c44.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
               class="swiper-lazy"
               data-reactid=".0.4.3.1.0.$1.1.0.0"
               src="https://yanxuan-item.nosdn.127.net/48da70a44ef09ed4d646287573db2c44.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
               style="display: inline;">
        </div>
      </div>
      <div class="listhot-bottom">
        <ul>
          <li>
            <span>美食酒水榜</span>
            <img data-src="https://yanxuan-item.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.3.1.1.$0.1.0.0"
                 src="https://yanxuan-item.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </li>
          <li>
            <span>居家生活榜</span>
            <img data-original="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 data-src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.3.1.1.$1.1.0.0"
                 src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </li>
          <li>
            <span>个护清洁榜</span>
            <img data-original="https://yanxuan-item.nosdn.127.net/6d683c4ca12f8e3bb70cd1de83fe29a9.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 data-src="https://yanxuan-item.nosdn.127.net/6d683c4ca12f8e3bb70cd1de83fe29a9.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.3.1.1.$2.1.0.0"
                 src="https://yanxuan-item.nosdn.127.net/6d683c4ca12f8e3bb70cd1de83fe29a9.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </li>
          <li>
            <span>服饰鞋包榜</span>
            <img data-original="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 data-src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.3.1.1.$3.1.0.0"
                 src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </li>
          <li>
            <span>数码家电榜</span>
            <img data-original="https://yanxuan-item.nosdn.127.net/8710b394afc12ff039fac08dfb9333bb.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 data-src="https://yanxuan-item.nosdn.127.net/8710b394afc12ff039fac08dfb9333bb.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.3.1.1.$4.1.0.0"
                 src="https://yanxuan-item.nosdn.127.net/8710b394afc12ff039fac08dfb9333bb.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </li>
          <li>
            <span>全球特色榜</span>
            <img data-original="https://yanxuan-item.nosdn.127.net/364bb4175dd73987f11dc1a701e28a2f.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 data-src="https://yanxuan-item.nosdn.127.net/364bb4175dd73987f11dc1a701e28a2f.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.3.1.1.$5.1.0.0"
                 src="https://yanxuan-item.nosdn.127.net/364bb4175dd73987f11dc1a701e28a2f.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </li>
          <li>
            <span>母婴亲子榜</span>
            <img data-original="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 data-src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.3.1.1.$6.1.0.0"
                 src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </li>
          <li>
            <span>运动旅行榜</span>
            <img data-original="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 data-src="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 class="swiper-lazy"
                 data-reactid=".0.4.3.1.1.$7.1.0.0"
                 src="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                 style="display: inline;">
          </li>
        </ul>
      </div>
    </div>
    <!--限时购-->
    <div class="timeshop">
      <div class="timeshop-top">
        <div class="timeshop-top-left">
          <p class="shop">限时购</p>
          <p>00：00：00</p>
        </div>
        <div class="timeshop-top-right">
          <span>更多></span>
        </div>
      </div>
      <div class="timeshop-bottom">
        <ul>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/4660884db2bd3092f6d3fcd7d374aaa3.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=216x216"
                 class="img"
                 data-reactid=".0.4.5.1.$0.0.0">
            <span>$799</span>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/4cc6b6ba91662691f2cae5687de23e29.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=216x216"
                 class="img"
                 data-reactid=".0.4.5.1.$1.0.0">
            <span>$799</span>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/7bb60cd94cb436726b8db296fda698fc.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=216x216"
                 class="img"
                 data-reactid=".0.4.5.1.$2.0.0">
            <span>$799</span>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/cff84f8844c856004e8de2595b76f570.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=216x216"
                 class="img"
                 data-reactid=".0.4.5.1.$3.0.0">
            <span>$799</span>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/f72675dde6fa1210d8dfa5cef9a724e1.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=216x216"
                 class="img"
                 data-reactid=".0.4.5.1.$4.0.0">
            <span>$799</span>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/9e9d5210bf5000cb336262cc2be2a707.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=216x216"
                 class="img"
                 data-reactid=".0.4.5.1.$5.0.0">
            <span>$799</span>
          </li>
        </ul>
      </div>
    </div>
    <!--新品-->
    <div class="newfirst">
      <div class="newfirst-top">
        <span>新品首发</span>
        <span>更多></span>
      </div>
      <div class="newfirst-bottom">
        <ul>
          <li>
            <img data-original="https://yanxuan-item.nosdn.127.net/ce014997ca8e90182752377442554916.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 data-src="https://yanxuan-item.nosdn.127.net/ce014997ca8e90182752377442554916.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 class="swiper-lazy"
                 data-reactid=".0.4.6.1.0.$0.0.0.0.0.0"
                 src="https://yanxuan-item.nosdn.127.net/ce014997ca8e90182752377442554916.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 style="display: block;">
            <span>75%酒精消毒湿巾 居家消毒复工出行必备</span>
            <p>$99</p>
          </li>
          <li>
            <img data-original="https://yanxuan-item.nosdn.127.net/50c0fbbcf7af08453ed99eec90a55622.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 data-src="https://yanxuan-item.nosdn.127.net/50c0fbbcf7af08453ed99eec90a55622.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 class="swiper-lazy"
                 data-reactid=".0.4.6.1.0.$1.0.0.0.0.0"
                 src="https://yanxuan-item.nosdn.127.net/50c0fbbcf7af08453ed99eec90a55622.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 style="display: block;">
            <span>银月-磁控静音家用健身车</span>
            <p>$1649</p>
          </li>
          <li>
            <img data-original="https://yanxuan-item.nosdn.127.net/36d82d80739fa3ea1e3852ca0281be8f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 data-src="https://yanxuan-item.nosdn.127.net/36d82d80739fa3ea1e3852ca0281be8f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 class="swiper-lazy"
                 data-reactid=".0.4.6.1.0.$2.0.0.0.0.0"
                 src="https://yanxuan-item.nosdn.127.net/36d82d80739fa3ea1e3852ca0281be8f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 style="display: block;">
            <span>抑菌率99.9% 韩国75%酒精除菌湿巾 72抽</span>
            <p>$29</p>
          </li>
          <li>
            <img data-original="https://yanxuan-item.nosdn.127.net/47bf52016cdbac8f0fd049cd4d7da743.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 data-src="https://yanxuan-item.nosdn.127.net/47bf52016cdbac8f0fd049cd4d7da743.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 class="swiper-lazy"
                 data-reactid=".0.4.6.1.0.$3.0.0.0.0.0"
                 src="https://yanxuan-item.nosdn.127.net/47bf52016cdbac8f0fd049cd4d7da743.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 style="display: block;">
            <span>轻松爆炒无涂层 日本极铁精致料理铁锅</span>
            <p>$799</p>
          </li>
          <li>
            <img data-original="https://yanxuan-item.nosdn.127.net/9f2ec755fc2f6c3a1b0b39abb33d30e7.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 data-src="https://yanxuan-item.nosdn.127.net/9f2ec755fc2f6c3a1b0b39abb33d30e7.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 class="swiper-lazy"
                 data-reactid=".0.4.6.1.0.$4.0.0.0.0.0"
                 src="https://yanxuan-item.nosdn.127.net/9f2ec755fc2f6c3a1b0b39abb33d30e7.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 style="display: block;">
            <span>除甲醛除菌除异味，车家两用空气净化器</span>
            <p>$79</p>
          </li>
          <li>
            <img data-original="https://yanxuan-item.nosdn.127.net/8dea57ae6cb4c5a895b251e9ed498a81.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 data-src="https://yanxuan-item.nosdn.127.net/8dea57ae6cb4c5a895b251e9ed498a81.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 class="swiper-lazy"
                 data-reactid=".0.4.6.1.0.$5.0.0.0.0.0"
                 src="https://yanxuan-item.nosdn.127.net/8dea57ae6cb4c5a895b251e9ed498a81.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                 style="display: block;">
            <span>【滨江居民保供】口罩 20片装（1.9元/片）</span>
            <p>$38</p>
          </li>
        </ul>
      </div>
    </div>
    <!--福利-->
    <div class="good">
      <ul>
        <li>
          <span>断货补单王</span>
          <p>补仓疯抢中</p>
          <div class="good-img">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150">
          </div>
        </li>
        <li>
          <span>回购榜单</span>
          <p>口碑超值价</p>
          <div class="good-img">
            <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150">
            <img src="https://yanxuan-item.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150">
          </div>
        <li>
          <span>员工精选</span>
          <p>收纳75折</p>
          <div class="good-img">
            <img src="https://yanxuan-item.nosdn.127.net/cd047a4005784f2ff2a6f46d97b2478f.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150">
            <img src="https://yanxuan-item.nosdn.127.net/cd047a4005784f2ff2a6f46d97b2478f.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150">
          </div>
        </li>
        <li>
          <span>应季尖货</span>
          <p>3月拔草清单</p>
          <div class="good-img">
            <img src="https://yanxuan-item.nosdn.127.net/2738944ac699357481e5c1a94b56bdea.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150">
            <img src="https://yanxuan-item.nosdn.127.net/2738944ac699357481e5c1a94b56bdea.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150">
          </div>
        </li>
      </ul>
    </div>
    <!--脚部-->
    <div class="footer">
      <div class="footer-top">
        <button>下载app</button>
        <button>电脑版</button>
      </div>
      <div class="footer-bottom">
        <span>网易公司版权所有 © 1997-2020</span>
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
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

<style lang="stylus" rel="stylesheet/stylus">
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
// 新人
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
      padding 20px
      background-color #F9E9CF
      height 50px
// 热销
.listhot
  margin 5px
  h4
    margin 5px
  .listhot-top
    display flex
    img
      width 80px
      height 80px
    .listhot-top-left
      background-color #F9F3E4
      padding 5px
      display flex
      span
        margin-top 20px
    .listhot-top-right
      margin-left 3px
      background-color #EBEFF6
      padding 5px
      display flex
      span
        margin-top 20px
  .listhot-bottom
    margin-top 3px
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
    li
      display flex
      flex-direction column
      justify-content center
      align-content center
      width 60px
      height 60px
      span
        font-size 10px
      img
        width 50px
        height 50px
// 限时购
.timeshop
  margin 5px
  .timeshop-top
    margin 5px
    display flex
    justify-content space-between
    .timeshop-top-left
      display flex
      .shop
        margin-right 5px
  .timeshop-bottom
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        display flex
        flex-direction column
        align-content center
        img
          width 80px
          height 80px
        span
          font-size 10px
          text-align center
          color red
// 新品首发
.newfirst
  margin 8px 5px
  .newfirst-top
    display flex
    justify-content space-between
    margin 6px
  .newfirst-bottom
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        width 80px
        display flex
        flex-direction column
        justify-content center
        margin 5px
        img
          width 60px
          height 60px
        span
          margin 3px
          font-size 10px
          white-space normal
        p
          font-size 10px
          color red
// 福利
.good
  margin 8px
  ul
    display flex
    flex-wrap wrap
    justify-content space-around
    li
      height 100px
      width 128px
      margin 2px
      background-color #F5F5F5
      display flex
      flex-direction column
      justify-content space-around
      span
        margin 5px
      p
        font-size 10px
        margin 0 0 0 5px
      .good-img
        display flex
        img
          width 50px
          height 50px
//脚部
.footer
  background-color #414141
  height 100px
  padding 40px 20px 20px 20px
  display flex
  flex-direction column
  align-items center
  .footer-top
    display flex
    justify-content space
    button
      background-color #414141
      outline: none
      border: 1px soid #ffffff
      margin 0px 10px
      color #ffffff
      font-size 10px
  .footer-bottom
    display flex
    flex-direction column
    margin 6px 0 0 0
    span
      font-size 10px
      margin 5px
  
  
</style>