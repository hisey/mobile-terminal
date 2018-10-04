// import Cookies from 'js-cookie'
// no transitoin in demo site
import {
  mapKey
} from "../../utils/env"
import {
  AlertModule
} from 'vux'

const shouldUseTransition = !/transition=none/.test(location.href)
// const geolocation = new qq.maps.Geolocation(mapKey, "myapp");
const options = {
  timeout: 9000
};

const app = {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: shouldUseTransition ? 'forward' : '',
    lat: null,
    lng: null,
    addr: "",
    province: "",
    city: "",
    district: "",
    status: false
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection(state, payload) {
      if (!shouldUseTransition) {
        return
      }
      state.direction = payload.direction
    },
    updatePosition(state, positionData) {
      state.lat = positionData.lat;
      state.lng = positionData.lng;
      state.addr = positionData.addr;
      state.province = positionData.province || state.province;
      state.city = positionData.city;
      state.district = positionData.district || state.district;
    },
    updatePositionStatus(state, status) {
      state.status = status
    }
  },
  actions: {
    getLocation({
      commit
    }) {
      return new Promise((resolve, reject) => {
        // alert(JSON.stringify("asad"))
        const showPosition = function (position) {
          commit('updatePositionStatus', true)
          commit('updatePosition', position)
          resolve()
        };
        const showErr = function () {
          // alert("定位错误")
          let position = {
            lat: null,
            lng: null,
            addr: ""
          }
          commit('updatePositionStatus', false)
          commit('updatePosition', position)
          AlertModule.show({
            title: '定位失败',
            content: "点击确定重新定位",
            onHide() {
              location.reload();
            }
          })
          reject()
        };
        // geolocation.getLocation(showPosition, showErr, options);
      })
    }
  }
}

export default app
