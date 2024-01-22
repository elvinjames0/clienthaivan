import React, { useState } from 'react';
import { DatePicker, Form, Input, message, Select } from 'antd';
import { useNavigate } from 'react-router';
import { localStorageService } from '../../../services/localStorageService';
import { quizService } from '../../../services/questionService';
import { useSelector } from 'react-redux';
export const CustomModalOnTap = ({ setModal }) => {
	const { classList } = useSelector((state) => state.quizSlice);
	const [isConfirm, setIsConfirm] = useState(false);
	let navigate = useNavigate();
	const onFinish = (values) => {
		quizService
			.postRegister(values)
			.then((res) => {
				message.success(res.data.message);
				localStorageService.setUserInfo(values);
				setIsConfirm(true);
			})
			.catch((err) => {
				if (err?.response?.status === 400) {
					quizService
						.postLogin(values)
						.then((res) => {
							message.success('Đăng nhập thành công');
							localStorageService.setUserInfo(values);
							setIsConfirm(true);
						})
						.catch((err) => {});
				}
			});
	};
	const onFinishFailed = (errorInfo) => {};
	return (
		<div className='modal-visible'>
			<div className='modal-container'>
				<h1 style={{ color: '#432ce0' }} className=' text-xl font-bold'>
					ĐĂNG KÝ SỐ BÁO DANH
				</h1>
				<Form name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
					<Form.Item
						label='Họ tên'
						name='fullname'
						rules={[
							{
								required: true,
								message: 'Nhập họ tên',
								pattern: new RegExp(
									/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
								),
							},
						]}
					>
						<Input placeholder=' Nhập họ tên' />
					</Form.Item>
					<div className='d-flex'>
						<Form.Item
							label='Năm sinh'
							name={'year_of_birth'}
							rules={[
								{
									message: 'Nhập năm sinh',
									required: true,
								},
							]}
						>
							<Input placeholder='Nhập năm sinh' type='number' />
						</Form.Item>
						<Form.Item
							label='Hạng thi'
							name={'class'}
							rules={[
								{
									required: true,
									message: 'Chọn hạng thi',
								},
							]}
						>
							<Select placeholder='Chọn hạng thi'>
								{classList?.map((e) => {
									if (e?.class_name !== 'Điểm liệt') {
										return <Select.Option value={e?.id}>{e?.class_name}</Select.Option>;
									}
								})}
							</Select>
						</Form.Item>
					</div>
					<Form.Item
						label='Số điện thoại'
						name='phone'
						rules={[
							{
								required: true,
								message: 'Nhập số điện thoại',
								pattern: new RegExp(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/),
							},
						]}
					>
						<Input placeholder='Nhập số điện thoại' />
					</Form.Item>

					<Form.Item
						label='Địa chỉ'
						name='address'
						rules={[
							{
								required: true,
								message: 'Nhập địa chỉ',
							},
						]}
					>
						<Input placeholder='Nhập địa chỉ' />
					</Form.Item>
					<div className={isConfirm ? 'hidden' : 'btn-check p-5 mx-auto flex justify-center items-center'}>
						<button className=' text-white' type='primary' htmlType='submit'>
							ĐĂNG KÝ
						</button>
					</div>
				</Form>

				<div className={isConfirm ? 'mt-5 flex justify-center gap-5' : 'hidden'}>
					<button
						onClick={() => {
							navigate('/bo-de-on-tap');
							setModal(false);
						}}
						className={isConfirm ? 'modal-btn' : 'modal-confirm'}
					>
						Bắt đầu ôn tập
					</button>
				</div>
			</div>
		</div>
	);
};
