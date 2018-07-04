import request from '../utils/request';

export async function get_index_tab(url='mock') {
    return request(`https://easy-mock.com/mock/5b28f17489429e74366fe562/example/${url}`);
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