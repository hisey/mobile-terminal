<template>
  <div id="app">
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
  </div>
</template>

<script>
import { Loading, TransferDom, ViewBox } from "vux";
// import store from './store'
// import Uploader from "vux-uploader";
import { mapGetters } from "vuex";
import { create } from "domain";
export default {
  name: "app",
  directives: {
    TransferDom
  },
  components: {
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
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  width: 100%;
  /* top: 46px; */
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
</style>
<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/close.less";
</style>
<style lang="sass">
@import './style/style.scss' ;
</style>



