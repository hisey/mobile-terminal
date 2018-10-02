// import store from '../store'
import fetch from '../utils/fetch'
import {
  apiEntry
} from '@/utils/env'
const XHB = {
  /**
   * 获取商品分类
   */
  getGoodsTypes: () => fetch.get(apiEntry, {
    c: "category", // 接口控制器
    a: "get_top_category", // 接口方法名
  }),
  /**
   * 获取商品列表
   */
  getGoodsList: (page, order_by, new_person, cat_fids) => fetch.get(apiEntry, {
    page: page || 1,
    c: "unitary", // 接口控制器
    a: "lists", // 接口方法名
    order_by: order_by,
    new_person: new_person || 0,
    cat_fids: cat_fids,
    store_id: 1
  }),
  /**
   * 登陆
   */
  getLogin: (code) => fetch.get(apiEntry, {
    c: 'login',
    a: 'code',
    code: code || "e7283516f50a8671514d9d028a0125f7"
  }),
  /**
   * 获取夺宝活动详情
   */
  getIndiana: (id) => fetch.get(apiEntry, {
    c: 'unitary',
    a: 'now_period_detail',
    store_id: 1,
    product_id: id
  }),
  /**
   * 获取历史夺宝活动详情
   */
  getHistoryIndiana: (id) => fetch.get(apiEntry, {
    c: 'unitary',
    a: 'past_period_detail',
    store_id:1,
    unitary_id:id
  }),
  /**
   * 获取夺宝详情页-往期夺宝列表
   */
  getpastRecordIndiana:(unitary_id,product_id,page)=>fetch.get(apiEntry ,{
    c: 'unitary',
    a: 'pass_issue_lists',
    unitary_id,
    product_id,
    page,
    store_id:1
  }),
    /**
   * 获取夺宝详情页-活动参与者
   */
  getRecordIndiana:(unitary_id,page)=>fetch.get(apiEntry ,{
    c: 'unitary',
    a: 'join_lists',
    unitary_id,
    page,
    store_id:1
  })
}
const shop = {
  list: (page) => fetch.get('/market/marketShop/index', {
    page: 1,
    longitude: 104.068756,
    latitude: 30.553435
  })
}

// const comment = {/
const commentList = (page) => fetch.get(apiEntry, {
  c: 'comment',
  a: 'lists',
  store_id: 1,
  page: page || 1
})

const unitaryHistory = (page, status) => fetch.get(apiEntry, {
  c: "unitary",
  a: "my_unitary_history",
  page,
  store_id: 1,
  status
})
// }
export {
  XHB,
  commentList,
  unitaryHistory,
  shop
}
