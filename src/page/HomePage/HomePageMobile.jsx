import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { CustomModalOnTap } from './Modal/CustomModalOnTap';
import { localStorageService } from '../../services/localStorageService';
export const HomePageMobile = ({ modal, setModal }) => {
	let navigate = useNavigate();
	const [info, setInfo] = useState(localStorageService.getUserInfo());
	return (
		<div className='w-full flex relative py-1 gap-5 home-container'>
			<div className=' w-full flex flex-col  gap-4 p-2 '>
				<div className={modal ? 'modal-wrapper' : 'hidden'}>
					<div onClick={() => setModal(false)} className='modal-overlay'></div>
					<CustomModalOnTap setModal={setModal} />
				</div>
				<div className='item-list py-3 cursor-pointer'>
					<div>
						<p>HỌC LÝ THUYẾT</p>
						<p>MÔTÔ - ÔTÔ</p>
						<div
							onClick={() =>
								info ? navigate('/bo-de-on-tap') : setModal(true)
							}
							style={{ backgroundColor: '#FFD124' }}
							className='btn-item mx-auto p-1 mt-5 flex justify-center items-center  rounded-3xl'
						>
							<p className=' text-xl text-black font-bold'>HỌC THỬ ONLINE</p>
							<div className=' icon-item'>
								<AiOutlineDoubleRight color='black' />
							</div>
						</div>
					</div>
				</div>
				<div className='item-list py-3 cursor-pointer'>
					<div>
						<p>THI THỬ LÝ THUYẾT</p>
						<p>MÔTÔ - ÔTÔ</p>
						<div
							onClick={() => {
								navigate('/thi-thu-cac-hang-xe');
							}}
							style={{ backgroundColor: '#FFD124' }}
							className='btn-item  mx-auto p-1 mt-5 flex justify-center items-center  rounded-3xl'
						>
							<p className=' text-xl text-black font-bold'>THI THỬ ONLINE</p>
							<div className=' icon-item'>
								<AiOutlineDoubleRight color='black' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
