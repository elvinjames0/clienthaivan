import { Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { userService } from '../../../services/userServices';
import { useDispatch } from 'react-redux';
import { setApiKey } from '../../../redux/Slices/quizSlice';
const AdminLoginPage = () => {
	const [isLogin, setIsLogin] = useState(false);
	const dispatch = useDispatch();
	const onFinish = (values) => {
		userService
			.loginAdmin(values)
			.then((res) => {
				message.success('Đăng nhập thành công');
				dispatch(setApiKey(res?.data?.apikey));
				setIsLogin(true);
			})
			.catch((err) => {
				message.error(err?.response?.data?.message);
			});
	};
	const onFinishFailed = (errorInfo) => {};
	return (
		<div className='flex justify-center items-center w-full  h-full min-h-screen p-2'>
			<div className='w-80 border px-5 py-10 rounded-lg shadow-md formLogin'>
				<h2 className='text-3xl text-slate-600 mb-5'>Đăng nhập</h2>
				<Form
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					name='basic'
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item
						label='Tài khoản'
						name='username'
						rules={[
							{
								required: true,
								message: 'Please input username!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Mật khẩu'
						name='password'
						rules={[
							{
								required: true,
								message: 'Please input password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>
					<div className='btn-check mx-auto flex justify-center items-center mb-5'>
						<button className='text-white h-8' htmlType='submit'>
							Đăng nhập
						</button>
					</div>
					{isLogin && (
						<p>
							<Link to={'/data-user'}> {'Chuyển tới trang Data user >>'}</Link>
						</p>
					)}
				</Form>
			</div>
		</div>
	);
};
export default AdminLoginPage;
