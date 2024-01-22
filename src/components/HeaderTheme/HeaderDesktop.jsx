import React from 'react';
// import "../../css/index.css";
import '../../sass/index.scss';
import { AiOutlineDown } from 'react-icons/ai';
export const HeaderDesktop = () => {
	return (
		<header>
			<div className='flex items-center justify-between container mx-auto pr-10 header-wrapper'>
				<div className='header-logo'>
					<a
						href='https://trungtamhaivan.com/'
						title='Trung Tâm Dạy Nghề Và Đào Tạo Sát Hạch Lái Xe Hải Vân - Trường dạy lái xe hải vân | Trường lái hải vân | Trung tâm dạy lái xe hải vân | Trường dạy lái xe hải vân biên hòa – đồng nai | Dạy lái xe Biên Hòa | Học lái xe Hải Vân | Học lái xe biên hòa | Dạy Lái Xe | Khóa đào tạo lái xe biên hòa | Học lái xe hạng B1 | Học lái xe hạng B2 | Học lái xe Hạng C | Học lái xe hạng A1'
						rel='home'
					>
						<img
							style={{ height: '89px', width: '85px', padding: '2px 0px' }}
							src='https://trungtamhaivan.com/wp-content/uploads/2021/07/cropped-LOGO-HAIVAN-THAYTRUN.jpg'
							alt='Trung Tâm Dạy Nghề Và Đào Tạo Sát Hạch Lái Xe Hải Vân'
						/>
					</a>
				</div>
				<div className=' w-32 h-10 flex justify-center items-center rounded-3xl' style={{ backgroundColor: '#7DCE13' }}>
					<a className=' text-white' href='https://trungtamhaivan.com/'>
						TRANG CHỦ
					</a>
				</div>
			</div>
		</header>
	);
};
