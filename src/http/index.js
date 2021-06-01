import httpService from './config'


export const loginApi = () => httpService.post(`/adult-exam/admin/login`, {
  "mobile": "13272081753",
  "password": "admin123456",
  "username": "admin123456"
});

export const pictureShow = (p) => httpService.get(`/adult-exam/app/picture/show`, p);

export const addexam = (p) => httpService.post(`/adult-exam/exam/admin/add`, p);
export const editexam = (p) => httpService.post(`/adult-exam/exam/admin/edit`, p);
export const queryexamList = (p) => httpService.post(`/adult-exam/exam/app/queryList`, p);
export const deleteexamList = (p) => httpService.delete(`/adult-exam/exam/admin/delete`, p);



