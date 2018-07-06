import request from '../utils/request';

//首页表格
export async function get_index_tab(url='mock') {
  return request(`https://easy-mock.com/mock/5b28f17489429e74366fe562/example/${url}`);
}

//测试登录状态
export async function get_login_status() {
  return request(`https://easy-mock.com/mock/5b28f1da89429e74366fe5a0/login_status1`);
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