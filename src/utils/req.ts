import axios from 'axios';
import { message } from 'antd';

const isDev = process.env.NODE_ENV === 'development';

const instance = axios.create({
  // 服务器地址需要自己配置和开发 暂时还没有想好
  baseURL: isDev ? 'http://127.0.0.1:4000' : 'http://xxxxx',
  timeout: 10000,
  // withCredentials: true,

});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers = {
      'x-requested-with': '',
      authorization: '',
      // 'content-type': 'application/json;charset=UTF-8'
    };
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    const { data } = response
    // 说有
    if (data.code === 0) {
      return response.data
    } else {
      throw new Error(data.message || '未知错误')
    }
  },
  function (error) {
    // 对响应错误做点什么
    const { response } = error;
    if (response) {
      if (response.status === 404) {
        message.error('请求资源未发现');
      } else {
        message.error(response.data.message || '未知错误');
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
