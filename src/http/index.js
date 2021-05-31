import httpService from './config'


export const loginApi = () => httpService.post(`/adult-exam/admin/login`, {
  "mobile": "13272081753",
  "password": "admin123456",
  "username": "admin123456"
});

export const addexam = (p) => httpService.post(`/adult-exam/exam/admin/add`, p);
