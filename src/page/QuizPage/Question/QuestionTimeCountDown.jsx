import React from 'react';
export const QuestionTimeCountDown = ({ time }) => {
	const renderTimeCountDown = () => {
		return `${time.minutes}:${time.seconds}`;
	};
	return (
		<div
			className=' text-white p-1 quiz-timeCountdown flex justify-center items-center'
			style={{
				maxHeight: '5%',
				backgroundColor: '#27156e',
				borderRadius: '13px 13px 0 0',
			}}
		>
			<div id='quiz-time' className=' quiz-time text-sm font-bold '>
				<span className=' text-sm'>Thời gian còn lại</span>
				<span className='minutes ml-2 text-sm'>{renderTimeCountDown()}</span>
			</div>
		</div>
	);
};
