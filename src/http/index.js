import httpService from './config'


export const loginApi = () => httpService.post(`/adult-exam/admin/login`, {
  "mobile": "13272081753",
  "password": "admin123456",
  "username": "admin123456"
});

export const pictureShow = (p, pr) => httpService.get(`/adult-exam/app/picture/show`, p, pr);

export const addexam = (p) => httpService.post(`/adult-exam/exam/admin/add`, p);
export const editexam = (p) => httpService.post(`/adult-exam/exam/admin/edit`, p);
export const queryexamList = (p) => httpService.post(`/adult-exam/exam/app/queryList`, p);
export const deleteexamList = (p) => httpService.delete(`/adult-exam/exam/admin/delete`, p);


export const queryEnrollmentList = (p) => httpService.post(`/adult-exam/enrollment/app/queryList`, p);
export const addEnrollment = (p) => httpService.post(`/adult-exam/enrollment/admin/add`, p);
export const editEnrollment = (p) => httpService.post(`/adult-exam/enrollment/admin/edit`, p);
export const deleteEnrollment = (p) => httpService.delete(`/adult-exam/enrollment/admin/delete`, p);


export const queryQuestionListByType = (p) => httpService.post(`/adult-exam/app/center/queryQuestionListByType`, p);
export const addQuestionInfo = (p) => httpService.post(`/adult-exam/admin/question/addQuestionInfo`, p);
export const updateQuestionInfo = (p) => httpService.post(`/adult-exam/admin/question/updateQuestionInfo`, p);
export const deleteQuestionInfo = (p) => httpService.delete(`/adult-exam/admin/question/deleteQuestionInfo`, p);


export const querySlideshowList = (p) => httpService.get(`/adult-exam/slideshow/app/querySlideshowList`, p);
export const querySlideshow = (p) => httpService.get(`/adult-exam/slideshow/app/querySlideshowThree`, p);
export const addSlideshow = (p) => httpService.post(`/adult-exam/slideshow/admin/add`, p);
export const editSlideshow = (p) => httpService.post(`/adult-exam/slideshow/admin/edit`, p);
export const deleteSlideshow = (p) => httpService.delete(`/adult-exam/slideshow/admin/delete`, p);


export const queryTutorongClass = (p) => httpService.get(`/adult-exam/app/tutorongClass/queryList`, p); // 查询辅导课堂