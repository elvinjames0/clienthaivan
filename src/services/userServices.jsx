import { httpService } from './configURL';
export const userService = {
	getDataList: (payload) =>
		httpService.get(
			`/data-user/get-list?from_date=${payload?.from_date || ''}&to_date=${
				payload?.to_date || ''
			}`
		),
	loginAdmin: (payload) => httpService.post(`/login`, payload),
};
