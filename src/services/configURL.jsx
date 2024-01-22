import axios from 'axios';
import { getApiKey, handleLoading } from '../redux/Slices/quizSlice';
import { store } from '../redux/store';
const BASE_URL = process.env.REACT_APP_URL;
export const httpService = axios.create({
	baseURL: BASE_URL,
});
httpService.interceptors.request.use(
	function (config) {
		config.headers.token = store.getState().quizSlice.apiKey;

		store.dispatch(handleLoading(true));
		return config;
	},
	function (err) {
		return Promise.reject(err);
	}
);
httpService.interceptors.response.use(
	function (config) {
		setTimeout(() => {
			store.dispatch(handleLoading(false));
		}, 500);
		return config;
	},
	function (err) {
		setTimeout(() => {
			store.dispatch(handleLoading(false));
		}, 500);
		return Promise.reject(err);
	}
);
