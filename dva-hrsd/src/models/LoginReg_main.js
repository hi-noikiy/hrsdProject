export default {

    namespace: 'loginReg',
  
    state: {
        activeNum: 0
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
    },
  
    reducers: {
        //改变选中状态
        c_active (state, { payload }){
            console.log(payload.index)
            return {
                ...state,
                activeNum: payload.index
            }
        },
        save (state, { payload }) {
            const { data: { data: { data: { projects } } } } = payload;
            return {
                tab_data: projects
            }
        }
    },
};