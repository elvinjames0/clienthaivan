import { configureStore } from '@reduxjs/toolkit';
import quizSlice from './Slices/quizSlice';
export const store = configureStore({
	reducer: {
		quizSlice,
	},
});
