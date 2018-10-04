import fetch from '../utils/fetch'
/**
 * 获取商品列表
 */
const getGoodsList = (typeId) => fetch.get('/goods/getGoodsList', {
  typeId
})
export {
  getGoodsList
}
