import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useWindowSize } from '../../Hook/useWindowSize';
import { handleThiThu } from '../../redux/Slices/quizSlice';
import { quizService } from '../../services/questionService';
import { FaHandPointRight } from 'react-icons/fa';
import '../../sass/homePage.scss';
import { CustomModal } from './Modal/CustomModal';

export const HomePageThiThu = () => {
	let dispatch = useDispatch();
	let navigate = useNavigate();
	const windowSize = useWindowSize();
	let [test, setTest] = useState(null);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [data, setData] = useState(null);
	useEffect(() => {
		quizService
			.getDanhSachHangThi()
			.then((res) => {
				setData(res?.data);
			})
			.catch((err) => {});
	}, []);
	if (windowSize.width < 980) {
		return (
			<div className='w-full relative py-1 gap-5 home-container'>
				<div className={isOpenModal ? 'modal-wrapper' : 'hidden'}>
					<div className={isOpenModal ? 'modal-wrapper' : 'hidden'}>
						<div
							onClick={() => setIsOpenModal(false)}
							className='modal-overlay'
						></div>
						<CustomModal test={test} setIsOpenModal={setIsOpenModal} />
					</div>
				</div>
				<div className=' w-full flex flex-col  gap-4 p-2 '>
					{data?.map((e, i) => {
						if (e.id == 9) {
							return <></>;
						}
						return (
							<div
								key={i}
								onClick={() => {
									setIsOpenModal(true);
									dispatch(handleThiThu(i + 1));
									setTest(e.class_name);
								}}
								className='item-test py-3  cursor-pointer'
							>
								<span className='text-xl text-white'>
									<FaHandPointRight />
								</span>
								<span className=' text-xl text-white m-0'>
									THI THỬ HẠNG {e.class_name}
								</span>
							</div>
						);
					})}
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
	} else {
		navigate('/');
	}
};
