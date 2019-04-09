// 引用axios
import axios from "axios";


if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "../";
} else {
  axios.defaults.baseURL = "/api";
}

axios.interceptors.request.use(
  config => {
    // 包装请求参数
    let requestData = config.data);
    config.data = JSON.stringify(requestData);
    // console.log("request data:", config.url, config.data)
    setHeader(config);
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

/**
 * 设置header信息
 * @param config
 */
function setHeader(config) {
  let time = new Date().getTime();
  // let token = getToken();
  let token = '702_2c9d6246dfdb97065811517fb509ffa5'
  let sign = security.sign(config.data, token, time) + '#'
  config.headers["Content-Type"] = "application/json";
  config.headers["time"] = time;
  config.headers["token"] = token;
  config.headers["sign"] = sign;
}

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
}

/**
 * 包装请求数据
 * @param data
 * @returns {{channel: string, clinicCode: string, userId: *, version: string, data: *}}
 */
export function warpRequestData(data) {
  let warpData = {
    data: data
  };
  return warpData;
}



/**
 * 设置storage
 * @param name
 * @param value
 */
export function setStorageItem(name, value) {
  if (value) {
    window.sessionStorage.setItem(name, JSON.stringify(value));
  }
}

/**
 * 获取storage
 * @param name
 * @param value
 */
export function getStorageItem(name) {
  let value = window.sessionStorage.getItem(name);
  return value == null ? '' : JSON.parse(value);
}

/**
 * 删除storage
 * @param name
 * @param value
 */
export function delStorageItem(name) {
  window.sessionStorage.removeItem(name);
}

/**
 * 清空storage
 * @param name
 * @param value
 */
export function clearStorage() {
  window.sessionStorage.clear();
}

/** *************************************************** 业务方法 ***************************************************/
/**
 * 设置用户
 * @returns {*}
 */
export function setUser(user) {
  return setStorageItem('user', user);
}
/**
 * 获取用户
 * @returns {*}
 */
export function getUser() {
  return getStorageItem('user');
}
/**
 * 设置用户token
 * @returns {*}
 */
export function setToken(token) {
  return setStorageItem('token', token);
}

/**
 * 获取用户token
 * @returns {*}
 */
export function getToken() {
  return getStorageItem('token');
}
