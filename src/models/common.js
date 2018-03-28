/**
 * Created by jiahang Lee on 2018/3/23.
 */
import * as service from '../services/crud'
import REST_API from '../consts/api'
import {routerRedux} from 'dva/router'
export default {

  namespace: 'common',

  state: {
    list: [],
    data:[{}],
    dataSource: [],
    order: [],
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: false,
    item: ""
  },
  reducers: {
    fetchSuccess (state, {payload:{ list}}) {
      const list1 = list
      return {...state, list}
    },
    pushSuccess (state, {payload:{id,va}}) {
      const data =  {id,va}
      return {...state, data}
    },
    fetchProgramRankSuccess (state, {payload}) {
      return {...state, ...payload}
    },
    clear (state) {
      return {...state, list: [], distributions: []}
    },
    clear1 (state) {
      return {...state,area: []}
    }
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  // effects: {
  //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //     yield put({ type: 'save' });
  //   },
  // },
  effects: {
    * fetch ({ payload: { valuess = "",page = 1 } }, {call, put}) {
      var values = valuess;
      const {data} = yield call(service.fetch, {values, page });
      yield put({type: 'fetchSuccess', payload: {list: {data}}});
    },
    *push ({ payload: { id,va}},{call,put}) {
      const dd = id
      const vv = va
      yield put({type:'pushSuccess', payload: {id,va}})
    },


      *getId({ payload:id }, { call, put }) {  // eslint-disable-line
        // yield put({ type: 'save' });
        // dispatch(routerRedux.push('/item'))
// with query
        const {data}  = yield call(service.fetchItem,{id})
        yield put(routerRedux.push({
          pathname:'/item',
          query:data
        }))
      },
  },

  // reducers: {
  //   save(state, action) {
  //     return { ...state, ...action.payload };
  //   },
  // },

  subscriptions: {
    setup({ dispatch, history }) {
       history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch', payload: query })
        }
        // if (pathname === '/item') {
        //   dispatch({ type: 'getId2', payload: query })
        // }
      });
    },
  },
};
//   subscriptions:{
//     setup({dispatch}){
//       dispatch({type:'fetch'})
//     }
//   }
// }
