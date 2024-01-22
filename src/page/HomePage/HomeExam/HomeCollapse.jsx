import { Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { quizService } from '../../../services/questionService';
const { Panel } = Collapse;
export const HomeCollapse = () => {
	let navigate = useNavigate();
	const [data, setData] = useState();
	const [test, setTest] = useState([]);
	const [currentTest, setCurrentTest] = useState();
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
	const onChange = (key) => {};
	return (
		<div>
			<div className='w-full flex py-1 gap-5 home-container' style={{ height: 'fit-content' }}>
				<div className=' w-full  gap-4 p-2 h-full '>
					<Collapse accordion onChange={onChange}>
						{data?.map((e, i) => {
							if (e.id == 9) {
								return <></>;
							}
							return (
								<Panel
									onClick={() => {
										setCurrentTest(i + 1);
									}}
									header={
										<p
											style={{ width: '100%', textTransform: 'uppercase' }}
											onClick={() => {
												setCurrentTest(i + 1);
											}}
										>
											Bộ đề HẠNG {e.class_name}
										</p>
									}
									key={i}
								>
									<div key={i} className=' w-full p-2 h-full'>
										<div className='  grid grid-cols-2 gap-1'>
											{test?.map((e, i) => {
												return (
													<div
														key={i}
														onClick={() => {
															navigate(`/kiem-tra-bo-de-thi/${e.id}`);
														}}
														className='item-menu'
													>
														{e?.test_name}
													</div>
												);
											})}
										</div>
									</div>
								</Panel>
							);
						})}
					</Collapse>
				</div>
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
		</div>
	);
};
