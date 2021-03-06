import { get_login_status } from '../services/api'
export default {

    namespace: 'loginReg',
  
    state: {
        verify_code: true
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
        //获取密码效验状态
        *verification_status({ payload }, { call, put }) {
            const data = yield call(get_login_status);            //获取数据
            yield put({ type: 'save_veri_statu', payload: { data } });  //保存数据。payload附带数据
        },
    },
  
    reducers: {
        password_true (state) {
            return {
                ...state,
                verify_code: true,
            }
        },
        save_veri_statu (state, { payload }) {
            const {  data: { data: { login_status } } } = payload;
            return {
                ...state,
                verify_code: login_status
            }
        },
        save (state, { payload }) {
            const { data: { data: { login_status } } } = payload;
            return {
                verify_code: login_status
            }
        }
    },
};