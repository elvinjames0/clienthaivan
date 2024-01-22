import React, { useEffect, useState } from 'react';
import { Form, Input, message, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { quizService } from '../../../services/questionService';
export const CustomModal = ({ setIsOpenModal, test }) => {
	const initalState = {
		fullname: 'Nguyễn Văn A',
		phone: '923456789',
		address: 'Biên Hòa - Đồng Nai',
	};
	const [isConfirm, setIsConfirm] = useState(false);
	const [info, setInfo] = useState();
	let id = useSelector((state) => state.quizSlice.id);
	let navigate = useNavigate();
	const onFinish = (values) => {
		setIsConfirm(true);
		quizService
			.postLogin({ phone: values.soBaoDanh })
			.then((res) => {
				message.success('Thành công !');
				setInfo(res.data.data);
			})
			.catch((err) => {
				message.info(err?.response?.data?.message);
				// message.error('Số báo danh không tồn tại');
			});
	};
	const onFinishFailed = (errorInfo) => {};
	const [form] = Form.useForm();
	useEffect(() => {
		form.setFieldsValue({ khoaDaoTao: test });
	}, [test]);
	return (
		<div className='modal-visible'>
			<div className='modal-container'>
				<Form
					form={form}
					name='basic'
					initialValues={{
						donVi: 'Trung tâm dạy nghề và đào tạo sát hạch lái xe Hải Vân',
						khoaDaoTao: test,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item
						label='Đơn vị'
						name='donVi'
						rules={[
							{
								required: true,
								message: 'Chọn đơn vị đào tạo',
							},
						]}
					>
						<Select placeholder='Chọn đơn vị đào tạo' allowClear>
							<Option value='Trung tâm dạy nghề và đào tạo sát hạch lái xe Hải Vân'>
								Trung tâm dạy nghề và đào tạo sát hạch lái xe Hải Vân
							</Option>
						</Select>
					</Form.Item>
					<Form.Item
						name='khoaDaoTao'
						label='Khóa đào tạo :'
						rules={[
							{
								required: true,
								message: 'Chọn khóa đào tạo',
							},
						]}
					>
						<Select placeholder='Chọn khóa đào tạo' allowClear>
							<Select.Option value='A1'>A1</Select.Option>
							<Select.Option value='A2'>A2</Select.Option>
							<Select.Option value='B1'>B1</Select.Option>
							<Select.Option value='B2'>B2</Select.Option>
							<Select.Option value='C'>C</Select.Option>
							<Select.Option value='D'>D</Select.Option>
							<Select.Option value='E'>E</Select.Option>
							<Select.Option value='F'>F</Select.Option>
						</Select>
					</Form.Item>
					<div className='modal-info-sbd'>
						<Form.Item
							label='Số báo danh :'
							name='soBaoDanh'
							rules={[
								{
									required: true,
									// message: 'Nhập số báo danh',
									message: 'Nhập số báo danh ( số điện thoại )',
									pattern: new RegExp(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/),
								},
							]}
						>
							<Input placeholder='Nhập số báo danh ( số điện thoại )' />
						</Form.Item>
						<div className='btn-check mx-auto flex justify-center items-center'>
							<button className=' text-white' type='primary' htmlType='submit'>
								KIỂM TRA THÔNG TIN THÍ SINH
							</button>
						</div>
					</div>
				</Form>
				<div className=' flex gap-3 modal-info my-4'>
					<img
						className='modal-img '
						src='https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg'
						alt=''
					/>
					<div className={isConfirm ? 'modal-userInfo' : 'hidden'}>
						<div
							className=' font-bold'
							style={{
								color: '#3120E0',
							}}
						>
							<p>Loại GPLX </p>
							<p>Họ tên </p>
							<p>Số điện thoại</p>
							<p>Số CCCD </p>
							<p>Địa chỉ </p>
						</div>
						<div
							style={{
								color: '#3120E0',
							}}
						>
							<p> Hạng {test}</p>
							<p>{info?.fullname}</p>
							<p>{'0' + info?.phone}</p>
							<p>045875642889</p>
							<p>{info?.address}</p>
						</div>
					</div>
				</div>
				<div className=' flex justify-end gap-5'>
					<button
						onClick={() => {
							if (info) {
								setIsOpenModal(false);
								navigate(`/thi-thu/${id}`);
							}
						}}
						className={isConfirm ? 'modal-btn' : 'modal-confirm'}
					>
						VÀO THI
					</button>
					<button
						onClick={() => {
							setIsOpenModal(false);
						}}
						className=' modal-cancel'
					>
						HỦY
					</button>
				</div>
			</div>
		</div>
	);
};
