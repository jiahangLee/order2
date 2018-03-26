/**
 * Created by jiahang Lee on 2018/3/23.
 */
import * as service from '../services/crud'
import REST_API from '../consts/api'
export default {

  namespace: 'common',

  state: {
    list: [],
    dataSource:[],
    order :[],
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: false,
  },
  reducers: {
    fetchSuccess (state, {payload:{ list}}) {
      const list1 = list
      return {...state, list}
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
      *fetch2({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
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
        if (pathname === '/um/role') {
          dispatch({ type: 'roleFetch', payload: query })
        }

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
