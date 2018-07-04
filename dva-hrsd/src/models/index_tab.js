import { get_index_tab } from '../services/api'
export default {

    namespace: 'index_tab',
  
    state: {
        tab_data: []
    },
  
    subscriptions: {
        setup({ dispatch, history }) {
            
        }
    },
  
    effects: {
        //获取数据
        *fetch({ payload }, { call, put }) {
            const data = yield call(get_index_tab);            //获取数据
            yield put({ type: 'save', payload: { data } });  //保存数据。payload附带数据
        },
    },
  
    reducers: {
        save (state, { payload }) {
            const { data: { data: { data: { projects } } } } = payload;
            return {
                tab_data: projects
            }
        }
    },
};