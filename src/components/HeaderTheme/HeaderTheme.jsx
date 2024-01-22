import React from 'react';
import '../../sass/index.scss';
import { HeaderDesktop } from './HeaderDesktop';
import { useWindowSize } from '../../Hook/useWindowSize';
import { HeaderMobile } from './HeaderMobile';
import { HeaderTable } from './HeaderTable';

export const HeaderTheme = () => {
	const windowSize = useWindowSize();
	if (windowSize.width < 450) {
		return <HeaderMobile />;
	} else if (windowSize.width < 960) {
		return <HeaderTable />;
	}
	return <HeaderDesktop />;
};
