import { httpService } from './configURL';
export const quizService = {
	getTestById: (id) => httpService.get(`/get-test-by-id?test_id=${id}`),
	getDanhSachHangThi: () => httpService.get(`/get-class`),
	getDanhSachThiThu: (id) => httpService.get(`/generate-test?class_id=${id}`),
	getListTestOfClass: (id) =>
		httpService.get(`/get-list-test-of-class?class_id=${id}`),
	postRegister: (info) => httpService.post(`/data-user/dangkiSBD`, info),
	postLogin: (info) => httpService.post(`/data-user/checkSBD`, info),
};
