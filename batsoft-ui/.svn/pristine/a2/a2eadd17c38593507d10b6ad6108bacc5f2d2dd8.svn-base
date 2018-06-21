export default {

    namespace: 'Floa_window',
  
    state: {
        show: true
    },
  
    subscriptions: {
        setup({ dispatch, history }) {
            
        }
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
        hide_fl_win () {
            return {
                show: false
            }
        }, 
        show_fl_win () {
            return {
                show: true
            }
        },
        save() {
            console.log(123)
        }
    },
  
  };
  