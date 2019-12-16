import Vue from 'vue'
import axios from 'axios'

// https://github.com/axios/axios#interceptors
axios.interceptors.response.use(res => {
  if (res.data.error) {
    return Promise.reject(res)
  }
  return res
}, err => {
  // Add friendly message to the real error
  if (err.message === 'Network Error') {
    err.message = 'It seems like you are offline, please try again.'
  }
  throw err
})

const api = {
  get(route, cb) {
    return this.send2API("get", route, {}, cb);
  },

  post(route, req, cb) {
    return this.send2API("post", route, req, cb);
  },

  put(route, req, cb) {
    return this.send2API("put", route, req, cb);
  },

  delete(route, cb) {
    return this.send2API("delete", route, {}, cb);
  },

  send2API(method, route, req, cb) {
    // k('main.js send2API req:', method, route, req, cb)
    return new Promise((resolve, reject) => {
      axios[method](route, req)
        .then(res => {
          // k('send2API res:', res.data)
          cb(res.data);
          resolve(res)
        })
        .catch(err => reject(err));
    })
  }
}

Vue.prototype.api = api
