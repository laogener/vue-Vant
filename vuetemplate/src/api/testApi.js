import fetch from '../utils/request';
import qs from 'qs'; // 根据需求是否导入qs模块
const testApi = {
  // 获取用户列表
  getUser () {
    return fetch({
      url: 'http://jsonplaceholder.typicode.com/comments',
      method: 'get'
    });
  },
  login (params) {
    fetch({
      url: '/api/sys/role/save',
      method: 'post',
      params
    });
  }
};

export default testApi;
