import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { quizService } from '../../../services/questionService';
import { handleChangeColorTest } from '../../controller/questionController';
import { FaHandPointRight } from 'react-icons/fa';
export const HomeExamDesktop = () => {
	const [data, setData] = useState();
	const [test, setTest] = useState([]);
	const [currentTest, setCurrentTest] = useState();
	let navigate = useNavigate();
	useEffect(() => {
		quizService
			.getListTestOfClass(currentTest)
			.then((res) => {
				setTest(res.data);
			})
			.catch((err) => {});
	}, [currentTest]);
	useEffect(() => {
		quizService
			.getDanhSachHangThi()
			.then((res) => {
				setData(res?.data);
			})
			.catch((err) => {});
	}, []);
	useEffect(() => {
		quizService
			.getListTestOfClass(1)
			.then((res) => {
				setTest(res.data);
			})
			.catch((err) => {});
	}, []);
	return (
		<div className='h-screen w-full flex py-1 gap-5' style={{ maxHeight: '1000px' }}>
			<div
				id='test-container'
				className=' w-1/5 flex  flex-col justify-between gap-4 p-2 h-full  '
				// style={{ borderRight: '4px solid gray' }}
			>
				{data?.map((e, i) => {
					if (e.id == 9) {
						return <></>;
					}
					return (
						<div
							key={i}
							onClick={() => {
								setCurrentTest(i + 1);
								handleChangeColorTest();
							}}
							className={
								data[0] == e
									? 'item-list2 py-3 gap-1 cursor-pointer activeTest'
									: 'item-list2 py-3 gap-1  cursor-pointer'
							}
						>
							<span className='text-xl text-white'>
								<FaHandPointRight />
							</span>
							<span className=' text-xl text-white m-0'>BỘ ĐỀ HẠNG {e?.class_name.toUpperCase()}</span>
						</div>
					);
				})}

				<div
					className='py-1 px-5 gap-3 flex w-full items-center justify-center rounded  mx-auto  btn-back'
					onClick={() => {
						navigate('/');
					}}
				>
					<BsArrowLeft />
					<p className=' text-xl m-0'>Quay lại</p>
				</div>
			</div>
			<div className=' w-4/5 p-2 h-full'>
				<div>
					<div className='  grid grid-cols-4 gap-5'>
						{test?.map((e, i) => {
							return (
								<div
									onClick={() => {
										navigate(`/kiem-tra-bo-de-thi/${e.id}`);
									}}
									key={i}
									className='item-menu'
								>
									{e.test_name}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
