import request from '../utils/request';

export async function get_tab_data() {
    return request('https://easy-mock.com/mock/5b28f17489429e74366fe562/example/mock');
  }



// export async function removeRule(params) {
//   return request('/api/rule', {
//     method: 'POST',
//     body: {
//       ...params,
//       method: 'delete',
//     },
//   });
// }