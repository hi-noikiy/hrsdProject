import { get_login_status } from '../services/api'
export default {

    namespace: 'ctoc',
  
    state: {
        Limit_price: {
            data_mark: 'Limit_price',
            buy_data: {
                price: 0.072053,
                quantity: ''
            },
            sell_data: {
                price: '0.072052',
                quantity: ''
            }
        },
        Market_price: {
            data_mark: 'Market_price',
            buy_data: {
                price: 1.072053,
                quantity: ''
            },
            sell_data: {
                price: '1.072052',
                quantity: ''
            }
        }
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
        //input改变
        inputChange (state,{ payload }) {
            const {  data_mark, type_data, input_type, value } = payload;
            return {
                ...state,
                [data_mark]: {
                    ...state[data_mark],
                    [type_data]: {
                        ...state[data_mark][type_data],
                        [input_type]: value
                    }
                }
            }
        },
        // 委托列表、最近交易 点击时同时改变
        change_buy_sell_input (state,{ payload }) {
            const { value } = payload;
            return {
                ...state,
                Limit_price: {
                    ...state.Limit_price,
                    buy_data: {
                        ...state.Limit_price.buy_data,
                        price: value
                    },
                    sell_data: {
                        ...state.Limit_price.sell_data,
                        price: value
                    }
                }
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