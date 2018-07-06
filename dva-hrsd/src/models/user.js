import { get_login_status } from '../services/api'
export default {

    namespace: 'user',
  
    state: {
        login_status: 0, 
    },
  
    subscriptions: {
        setup({  dispatch, history }, done) {
            history.listen((location, action) => {

            })
        }
    },
  
    effects: {
        //获取数据
        *fetch({ payload }, { call, put }) {
            const data = yield call();            //获取数据
            yield put({ type: 'save', payload: { data } });  //保存数据。payload附带数据
        },
        //获取登录状态
        *login_status({ payload }, { call, put }) {
            const data = yield call(get_login_status);            //获取数据
            yield put({ type: 'save_login_status', payload: { data } });  //保存数据。payload附带数据
        },
    },
  
    reducers: {
        save_login_status (state, { payload }) {
            const { data: { data: { data: { login_status } } } } = payload;
            return {
                ...state,
                login_status: login_status
            }
        },
        //保存数据
        save (state, { payload }) {
            return {
                ...state
            }
        }
    },
};