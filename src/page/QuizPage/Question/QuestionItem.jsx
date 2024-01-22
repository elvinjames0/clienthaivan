import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../../../Hook/useWindowSize';
import _ from 'lodash';
import {
	handleChangeColor,
	handleOnKeyUp,
} from '../../controller/questionController';
export const QuestionItem = ({ setImg, currentQuiz, data }) => {
	const windowSize = useWindowSize();
	const [chunk, setChunk] = useState(null);
	let current = 1;
	const handleChunkList = (arr) => {
		if (windowSize?.width < 650) {
			if (arr?.length <= 25) {
				let chunk = _.chunk(arr, 13);
				setChunk(chunk);
			} else if (arr?.length <= 30) {
				let chunk = _.chunk(arr, 15);
				setChunk(chunk);
			} else if (arr?.length <= 36) {
				let chunk = _.chunk(arr, 18);
				setChunk(chunk);
			} else {
				let chunk = _.chunk(arr, 23);
				setChunk(chunk);
			}
		} else {
			if (arr?.length <= 30) {
				let chunk = _.chunk(arr, 10);
				setChunk(chunk);
			} else if (arr?.length <= 36) {
				let chunk = _.chunk(arr, 12);
				setChunk(chunk);
			} else {
				let chunk = _.chunk(arr, 15);
				setChunk(chunk);
			}
		}
	};
	useEffect(() => {
		if (windowSize.width < 650) {
			handleChunkList(data?.questions);
		} else {
			handleChunkList(data?.questions);
		}
		setTimeout(() => {
			handleOnKeyUp();
			handleChangeColor();
		}, 100);
	}, [windowSize]);

	if (data) {
		return (
			chunk &&
			currentQuiz && (
				<div className='quiz-container' style={{ maxHeight: '90%' }}>
					<div id='quiz-content' className=' grid grid-cols-3 gap-1 p-1'>
						{chunk.map((arrQuestion, i) => {
							return (
								<div className='quiz-wrapper' key={i}>
									{arrQuestion?.map((e, i) => {
										if (e.numAnswer == 3) {
											return (
												<div
													className={
														currentQuiz == e
															? `quiz-item flex gap-1 active `
															: `quiz-item flex gap-1 `
													}
													key={i}
													onClick={() => {
														setImg(e?.img);
													}}
												>
													<span className=' font-bold text-base  ml-2 my-auto'>
														{current++}
													</span>
													<div className='quiz-container-input container-input flex justify-start gap-1 w-20'>
														<div className='quiz-choice'>
															<h3>1</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={1}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>
														<div className='quiz-choice'>
															<h3>2</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={2}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>
														<div className='quiz-choice'>
															<h3>3</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={3}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>
													</div>
												</div>
											);
										} else if (e.numAnswer == 2) {
											return (
												<div
													className={
														currentQuiz == e
															? `quiz-item flex gap-1 active `
															: `quiz-item flex gap-1 `
													}
													key={i}
													onClick={() => {
														setImg(e?.img);
													}}
												>
													<span className=' font-bold text-base  ml-2 my-auto'>
														{current++}
													</span>
													<div className='quiz-container-input container-input flex justify-start gap-1 w-20'>
														<div className='quiz-choice'>
															<h3>1</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={1}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>
														<div className='quiz-choice'>
															<h3>2</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={2}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>
													</div>
												</div>
											);
										} else {
											return (
												<div
													className={
														currentQuiz == e
															? `quiz-item flex gap-1 active `
															: `quiz-item flex gap-1 `
													}
													key={i}
													onClick={() => {
														setImg(e?.img);
													}}
												>
													<span className=' font-bold text-base  ml-2 my-auto'>
														{current++}
													</span>
													<div className='quiz-container-input container-input flex justify-start gap-1 w-20'>
														<div className='quiz-choice'>
															<h3>1</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={1}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>

														<div className='quiz-choice'>
															<h3>2</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={2}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>
														<div className='quiz-choice'>
															<h3>3</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={3}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>
														<div className='quiz-choice'>
															<h3>4</h3>
															<input
																type='checkbox'
																name={`question${e?.id}`}
																value={4}
																className='input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
														</div>
													</div>
												</div>
											);
										}
									})}
								</div>
							);
						})}
					</div>
				</div>
			)
		);
	}
};
