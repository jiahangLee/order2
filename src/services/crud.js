/**
 * Created by jiahang Lee on 2018/3/23.
 */
import request from '../utils/request';
import REST_API from '../consts/api'
import { pageNum } from '../config';
export function query(api) {
  return request(api);
}
export function fetch({values,page}) {
  return request(REST_API.ANYONE+`-1463006431&pageNum=${page}&&perNum=${pageNum}`);
}
export function fetchItem({id}) {
  return request(REST_API.ID+id);
}
export function fetchList() {
  return [{"vareCount":0,"number":46,"practice":"微辣，中辣，特辣","labelId":"-1463006431","price":15.0,"imageUrl":"/1515155095350.jpg","restaurant":"麦家小馆","name":"小炒肉","description":"农家小吃","id":"-1710234274"},{"vareCount":0,"number":22,"practice":"加葱花","labelId":"-1463006431","price":24.0,"imageUrl":"/1516420588310.jpg","restaurant":"麦家小馆","name":"蒜蓉蒸金针菇","description":"金针菇的口感是独特的，韧中带脆，配合我独家的蒜蓉酱一起蒸来吃，马上变成简单的美味!","id":"-568646221"},{"vareCount":0,"number":8,"practice":"微辣，中辣，特辣","labelId":"-1463006431","price":18.0,"imageUrl":"/1515081035909.jpg","restaurant":"麦家小馆","name":"黄焖鸡米饭","description":"特色小吃","id":"-569512831"}]
}
