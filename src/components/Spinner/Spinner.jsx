import React from 'react';
import { HashLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import '../../sass/homePage.scss';
export default function Spinner() {
	const isLoading = useSelector((state) => {
		return state.quizSlice.isLoading;
	});
	return isLoading ? (
		<div
			style={{ background: 'rgba(0, 0, 0, 0.5)' }}
			className='fixed h-screen w-screen top-0 left-0  z-50 flex items-center justify-center'
		>
			<div className='spinner'>
				<HashLoader color={'#277bc0'} />
				<h1 className=' text-white text-2xl font-medium text-center mt-5'>Loading ...</h1>
			</div>
		</div>
	) : (
		<></>
	);
}
