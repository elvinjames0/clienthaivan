import { FileExcelOutlined, LogoutOutlined } from '@ant-design/icons';
import { DatePicker, message, Table } from 'antd';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { tableReport } from './colTable';
import { userService } from '../../../services/userServices';
const { RangePicker } = DatePicker;
export default function TablePage() {
	const [data, setData] = useState([]);
	const handleDateChange = (e) => {
		let from_date = e[0].format('YYYY-MM-DD HH:mm:ss');
		let to_date = e[1].format('YYYY-MM-DD HH:mm:ss');
		userService
			.getDataList({ from_date, to_date })
			.then((res) => {
				setData(res?.data);
			})
			.catch((err) => {});
	};
	const handleExportData = () => {
		if (!data.length) {
			message.warning('Không có dữ liệu');
			return;
		}
		let wb = XLSX.utils.book_new();
		let ws = XLSX.utils.json_to_sheet(data);
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
		XLSX.writeFile(wb, 'data_user_export.xlsx');
	};
	const onLogout = () => {
		window.location.href = '/';
	};

	return (
		<div className='w-full px-5 pt-5'>
			<div className='mb-5 w-full flex justify-between items-center flex-wrap space-y-2'>
				<div>
					<span>Choose Date: </span>{' '}
					<RangePicker
						showTime={{ format: 'HH:mm' }}
						format='DD-MM-YYYY HH:mm'
						onOk={handleDateChange}
					/>
				</div>
				<button
					className='bg-green-500 text-white flex items-center py-1  px-3 rounded-sm mb-5 ml-auto'
					onClick={handleExportData}
				>
					<FileExcelOutlined className='mr-1' />
					Export Excel
				</button>
			</div>
			<p className='text-center '>Tổng: {data?.length} user</p>
			<div className='w-full overflow-x-scroll '>
				<Table columns={tableReport} dataSource={data} />
			</div>
			<div className='pb-3'>
				<button
					className='bg-blue-400 text-white flex items-center py-1  px-3 rounded-sm my-5 ml-auto'
					onClick={onLogout}
				>
					<LogoutOutlined className='mr-1' />
					Đăng xuất
				</button>
			</div>
		</div>
	);
}
