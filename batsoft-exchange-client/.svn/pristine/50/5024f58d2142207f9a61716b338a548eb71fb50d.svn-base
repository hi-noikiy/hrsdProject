import { get_tab_data } from '../services/api'
export default {

    namespace: 'index_data',
  
    state: {
        tab_data: {}
    },
  
    subscriptions: {
        setup({ dispatch, history }) {
            
        }
    },
  
    effects: {
        //获取数据
        *fetch({ payload }, { call, put }) {
            const data = yield call(get_tab_data);            //获取数据
            yield put({ type: 'save', payload: { data } });  //保存数据。payload附带数据
        },
    },
  
    reducers: {
        save (state, { payload }) {
            console.log(234)
            const { data: { data: { data } } } = payload;
            return {
                tab_data: data
            }
        }
    },
};