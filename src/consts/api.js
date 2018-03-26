/**
 * Created by jiahang Lee on 2018/3/23.
 */
import {REST_API, REST_PERSONAS_API} from '../config'

export default {
  HOME: `${REST_API}/food/foodlist`, //获取所有的菜品
  ANYONE: `${REST_API}/food/food?labelId=`,      //获取某个标签下的菜品（参数为标签ID）
  SECTION: `${REST_API}/label/labellist`          //获取标签列表

}
