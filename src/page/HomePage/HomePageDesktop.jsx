import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleThiThu } from '../../redux/Slices/quizSlice';
import { CustomModal } from './Modal/CustomModal';
import { FaHandPointRight } from 'react-icons/fa';
import { CustomModalOnTap } from './Modal/CustomModalOnTap';
import { localStorageService } from '../../services/localStorageService';
export const HomePageDesktop = ({ isOpenModal, setIsOpenModal, data, modal, setModal }) => {
	let [test, setTest] = useState(null);
	let navigate = useNavigate();
	let dispatch = useDispatch();
	const [info, setInfo] = useState(localStorageService.getUserInfo());
	return (
		data && (
			<div className='h-screen w-full relative flex py-1 gap-5' style={{ maxHeight: '1000px' }}>
				<div className={isOpenModal ? 'modal-wrapper' : 'hidden'}>
					<div onClick={() => setIsOpenModal(false)} className='modal-overlay'></div>
					<CustomModal test={test} setIsOpenModal={setIsOpenModal} />
				</div>
				<div className={modal ? 'modal-wrapper' : 'hidden'}>
					<div onClick={() => setModal(false)} className='modal-overlay'></div>
					<CustomModalOnTap setModal={setModal} />
				</div>

				<div
					className=' w-1/5 flex  flex-col justify-between gap-4 p-2 h-full '
					// style={{ borderRight: '4px solid gray' }}
				>
					<div
						// onClick={() => navigate('/bo-de-on-tap')}
						onClick={() => (info ? navigate('/bo-de-on-tap') : setModal(true))}
						className='item-list gap-1 py-3 cursor-pointer'
					>
						<span className='text-xl text-white'>
							<FaHandPointRight />
						</span>
						<span className=' text-xl text-white m-0'>HỌC LÝ THUYẾT</span>
					</div>
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
								className='item-list gap-1 py-3  cursor-pointer'
							>
								<span className='text-xl text-white'>
									<FaHandPointRight />
								</span>
								<span className=' text-xl text-white m-0'>THI THỬ HẠNG {e.class_name}</span>
							</div>
						);
					})}
				</div>
				<div className=' w-4/5 p-2 h-full'>
					<img
						className=' w-full h-full'
						src='https://trungtamhaivan.com/wp-content/uploads/2022/07/bannerdaylaixe.jpg)'
						alt=''
					/>
				</div>
			</div>
		)
	);
};
