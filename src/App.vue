<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <router-view></router-view> -->
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <view-box ref="viewBox" :body-padding-top="'0'" body-padding-bottom="0">
     <transition
        @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
        :name="viewTransition" :css="!!direction">
        <keep-alive include="index">
          <router-view class="router-view"></router-view>
        </keep-alive>
        </transition>
      </view-box>
=======
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
     
      <!-- <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :right-options="rightOptions" :title="title" :transition="headerTransition" @on-click-more="onClickMore">
        <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
          <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </span>
      </x-header> -->

      <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
      <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="viewTransition" :css="!!direction">
        <router-view class="router-view"></router-view>
      </transition>

      <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
        <tabbar-item :link="{path:'/'}">
          <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
          <span slot="label">Home</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/demo'}" badge="9">
          <span class="demo-icon-22" slot="icon">&#xe633;</span>
          <span slot="label">
            <span class="vux-demo-tabbar-component">个人中心</span>
            <!-- <span >Demos</span> -->
          </span>
        </tabbar-item>
      </tabbar>

    </view-box>
>>>>>>> da9b2a2c5b0e5eb79868c3635c622b262b6713bb
  </div>
</template>

<script>
<<<<<<< HEAD
import { Loading, TransferDom, ViewBox } from "vux";
// import store from './store'
// import Uploader from "vux-uploader";
import { mapGetters } from "vuex";
import { create } from "domain";
export default {
  name: "app",
=======
import { ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
import { mapState } from 'vuex'
import { Search } from 'vux'
export default {
  name: 'App',
>>>>>>> da9b2a2c5b0e5eb79868c3635c622b262b6713bb
  directives: {
    TransferDom
  },
  components: {
<<<<<<< HEAD
    Loading,
    ViewBox
    // Uploader
  },
  data() {
    return {
      images: []
    };
  },
  computed: {
    ...mapGetters(["deviceready", "isLoading", "direction"]),
    viewTransition() {
      if (!this.direction) return "";
      return "vux-pop-" + (this.direction === "forward" ? "in" : "out");
    }
  }
};
</script>
<style lang="css">
@import "//at.alicdn.com/t/font_805522_r8epd2pxz8s.css";
=======
    Search,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
  },
  methods: {
  },
  mounted() {

  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    headerTransition() {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    viewTransition() {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    },
  },
  data() {
    return {
     
    }
  }
}
</script>
<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";
body {
  background-color: #fbf9fe;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.demo-icon-22 {
  font-family: "vux-demo";
  font-size: 22px;
  color: #888;
}
.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}
.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #f70968;
}
.vux-demo-tabbar
  .weui-tabbar_item.weui-bar__item_on
  .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #f70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0 !important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
@font-face {
  font-family: "vux-demo"; /* project id 70323 */
  src: url("https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot");
  src: url("https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff") format("woff"),
    url("https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf") format("truetype"),
    url("https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont")
      format("svg");
}
.demo-icon {
  font-family: "vux-demo";
  font-size: 20px;
  color: #04be02;
}
.demo-icon-big {
  font-size: 28px;
}
.demo-icon:before {
  content: attr(icon);
}
.router-view {
  width: 100%;
  top: 46px;
}
>>>>>>> da9b2a2c5b0e5eb79868c3635c622b262b6713bb
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
<<<<<<< HEAD
  width: 100%;
  /* top: 46px; */
=======
  top: 46px;
>>>>>>> da9b2a2c5b0e5eb79868c3635c622b262b6713bb
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
<<<<<<< HEAD
</style>
<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/close.less";
</style>
<style lang="sass">
@import './style/style.scss' ;
</style>



=======
.menu-title {
  color: #888;
}
</style>
>>>>>>> da9b2a2c5b0e5eb79868c3635c622b262b6713bb
