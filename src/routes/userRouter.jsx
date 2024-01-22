import { HomeOutlined } from '@ant-design/icons';
import AdminLoginPage from '../page/Admin/AdminLoginPage/AdminLoginPage';
import TablePage from '../page/Admin/TablePage/TablePage';
import { HomeExam } from '../page/HomePage/HomeExam/HomeExam';
import HomePage from '../page/HomePage/HomePage';
import { HomePageThiThu } from '../page/HomePage/HomePageThiThu';
import { QuizPage } from '../page/QuizPage/QuizPage';

export const userRouter = [
	{
		path: '/',
		component: <HomePage />,
		exact: true,
		icon: <HomeOutlined />,
		title: 'Trang chủ',
	},
	{
		path: '/bo-de-on-tap',
		component: <HomeExam />,
		exact: true,
		icon: <HomeOutlined />,
		title: 'Trang chủ',
	},
	{
		path: '/thi-thu-cac-hang-xe',
		component: <HomePageThiThu />,
		exact: true,
		icon: <HomeOutlined />,
		title: 'Trang chủ',
	},

	{
		path: '/kiem-tra-bo-de-thi/:id',
		component: <QuizPage />,
		exact: true,
		icon: <HomeOutlined />,
		title: 'Trang chủ',
	},
	{
		path: '/thi-thu/:id',
		component: <QuizPage />,
		exact: true,
		icon: <HomeOutlined />,
		title: 'Trang chủ',
	},
	{
		path: '/admin',
		component: <AdminLoginPage />,
		exact: true,
		icon: <HomeOutlined />,
		title: 'Trang chủ',
	},
	{
		path: '/data-user',
		component: <TablePage />,
		exact: true,
		icon: <HomeOutlined />,
		title: 'Trang chủ',
	},
];
