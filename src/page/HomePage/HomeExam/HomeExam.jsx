import React from 'react';
import { useWindowSize } from '../../../Hook/useWindowSize';
import { HomeCollapse } from './HomeCollapse';
import { HomeExamDesktop } from './HomeExamDesktop';

export const HomeExam = () => {
	const windowSize = useWindowSize();
	if (windowSize.width < 980) {
		return <HomeCollapse />;
	}
	return <HomeExamDesktop />;
};
