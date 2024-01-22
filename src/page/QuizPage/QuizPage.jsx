import React, { useEffect, useState } from 'react';
import { Question } from './Question/Question';
import { UserInfo } from './UserInfo';
import '../../sass/index.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router';
export const QuizPage = () => {
	const [img, setImg] = useState();
	let navigate = useNavigate();
	const url = process.env.REACT_APP_URL;
	const myFunction = () => {
		const element = document.getElementById('quiz');
		element.scrollIntoView({ behavior: 'smooth' });
	};
	useEffect(() => {
		myFunction();
	}, []);

	return (
		<section
			className='px-2 project-wrapper'
			style={{ backgroundColor: '#f4f6f9' }}
		>
			<div id='quiz' className='project-container mb-10'>
				<div
					className='w-full  mr-4 project-content'
					style={{ border: '4px solid gray' }}
				>
					<img className='project-img' src={url + img} alt='' />
					<UserInfo />
				</div>
				<Question setImg={setImg} />
			</div>
			<div
				className='py-1 gap-4  flex w-40 items-center justify-center rounded-md mt-5 mx-auto btn-back'
				onClick={() => {
					navigate(-1);
				}}
			>
				<BsArrowLeft />
				<p className='m-0 text-xl'>Quay lại</p>
			</div>
		</section>
	);
};
