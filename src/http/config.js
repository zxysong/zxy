import axios from 'axios'

let url = process.env.VUE_APP_API;

class http {
  constructor() {
    this._http = axios.create({
      timeout: 100000,
      baseURL: url,
      withCredentials: true
    });
    this.interceptors();
  }
  get(url, params, p = {}) {
    return this._http.get(url, {
      params: {
        ...params
      }
    }, p);
  }
  post(url, params) {
    return this._http.post(url, { ...params });
  }
  delete(url, params) {
    return this._http.delete(url, {
      params: {
        ...params
      }
    });
  }
  interceptors() {
    this._http.interceptors.request.use(
      function (config) {
        let token = localStorage.getItem("token");
        if (token) {
          config.headers.token = token;
        }
        return config;
      },
      function (err) {
        return Promise.reject(err);
      }
    );
    this._http.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (err) {
        return Promise.reject(err);
      }
    );
  }
}
export default new http();
export const BaseUrl = url;