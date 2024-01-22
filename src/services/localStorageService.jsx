const KEY = 'KEY';
export const localStorageService = {
	removeUserInfo: () => {
		localStorage.removeItem(KEY);
	},
	setUserInfo: (data) => {
		localStorage.setItem(KEY, JSON.stringify(data));
	},
	getUserInfo: () => {
		return JSON.parse(localStorage.getItem(KEY));
	},
};
