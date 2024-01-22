import { createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '../../services/localStorageService';
const initialState = {
	id: '',
	isLoading: false,
	classList: [],
	userInfo: localStorageService.getUserInfo(),
	apiKey: 'e10adc3949ba59abbe56e057f20f883e',
};
const quizSlice = createSlice({
	name: 'quiz_slice',
	initialState,
	reducers: {
		handleThiThu: (state, { payload }) => {
			state.id = payload;
		},
		handleLoading: (state, { payload }) => {
			state.isLoading = payload;
		},
		setApiKey: (state, { payload }) => {
			state.apiKey = payload;
		},
		setClassList: (state, { payload }) => {
			state.classList = payload;
		},
	},
});
export const { handleThiThu, handleLoading, setApiKey, setClassList } = quizSlice.actions;
export default quizSlice.reducer;

export const getApiKey = (state) => state.quizSlice.apiKey;
