import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from '../../Hook/useWindowSize';
import { setClassList } from '../../redux/Slices/quizSlice';
import '../../sass/homePage.scss';
import { quizService } from '../../services/questionService';
import { HomePageDesktop } from './HomePageDesktop';
import { HomePageMobile } from './HomePageMobile';
export default function HomePage() {
	const dispatch = useDispatch();
	const windowSize = useWindowSize();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [data, setData] = useState(null);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		quizService
			.getDanhSachHangThi()
			.then((res) => {
				setData(res?.data);
				dispatch(setClassList(res?.data));
			})
			.catch((err) => {});
	}, []);
	if (windowSize.width < 980) {
		return <HomePageMobile modal={modal} setModal={setModal} />;
	}
	return (
		<HomePageDesktop
			setIsOpenModal={setIsOpenModal}
			data={data}
			isOpenModal={isOpenModal}
			modal={modal}
			setModal={setModal}
		/>
	);
}
