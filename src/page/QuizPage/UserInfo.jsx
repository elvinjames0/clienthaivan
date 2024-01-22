import React, { useState } from 'react';
import { localStorageService } from '../../services/localStorageService';
export const UserInfo = () => {
	const [info, setInfo] = useState(localStorageService.getUserInfo());
	return (
		<div className='w-full flex project-info '>
			<div className=' w-2/3 flex'>
				<img
					className='w-32 '
					src='https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-b0de2bad.jpg'
					alt=''
				/>
				<div
					className='text-left pl-3 pt-3 w-full'
					style={{ backgroundColor: '#f4f6f9' }}
				>
					<p className='text-xl font-bold '>THÔNG TIN THÍ SINH</p>
					<p className='font-bold'>Họ và tên : {info?.fullname}</p>
					<p className='font-bold'>Số điện thoại : {'0' + info?.phone}</p>
					<p className='font-bold'>Địa chỉ : {info?.address}</p>
				</div>
			</div>
			<div style={{ backgroundColor: ' #27156e' }} className=' w-1/3 pt-3'>
				<h1 className='text-white text-base'>BỘ 600 CÂU HỎI LÁI XE</h1>
				<img
					className=' mx-auto'
					style={{ width: '20vh', maxWidth: '65%' }}
					src='https://trungtamhaivan.com/wp-content/uploads/2021/07/cropped-LOGO-HAIVAN-THAYTRUN.jpg'
					alt='Trung Tâm Dạy Nghề Và Đào Tạo Sát Hạch Lái Xe Hải Vân'
				/>
			</div>
		</div>
	);
};
