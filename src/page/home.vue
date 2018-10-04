<template>
  <div id="home">
    <!-- <search style="z-index: 999;position:fixed;top:0">
    </search> -->
    <swiper :list="imgList">
    </swiper>
    <load-more :show-loading="false" tip="热门推荐" background-color="#fbf9fe"  class="load-more" ></load-more>
     <router-link :to="{path:'/HelloWorld'}">链接</router-link> 
  </div>
</template>

<script>
// import { Search } from 'vux'
// import { Swiper } from 'vux'
import { Flexbox, FlexboxItem, Search, Swiper,LoadMore } from 'vux'
export default {
  name: 'home',
  components: {
    Search,
    Swiper,
    Flexbox,
    FlexboxItem,
    LoadMore
  },
  data() {
    return {
      imgList: [{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一次旅行',
        // fallbackImg: 'https://static.vux.li/demo/3.jpg'
      }]
    }
  }
}
</script>

