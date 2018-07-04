export default {

    namespace: 'common_header',
  
    state: {
        data: [
            {
                text: '首页',
                path: '/',
                activeNum: 0
            },
            {
                text: '法币交易',
                path: '/fb',
                activeNum: 1
            },
            {
                text: '币币交易',
                path: '/ctoc',
                activeNum: 2
            },
            {
                text: '活动',
                path: '/events',
                activeNum: 3
            }
        ],
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
            console.log(payload.active)
            return {
                ...state,
                active: payload.active
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