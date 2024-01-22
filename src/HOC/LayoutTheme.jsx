import React from 'react';
import { HeaderTheme } from '../components/HeaderTheme/HeaderTheme';
import '../sass/index.scss';
export default function LayoutTheme({ component }) {
	return (
		<div>
			<HeaderTheme />
			<div className='pt-1'>{component}</div>
		</div>
	);
}
