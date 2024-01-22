import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { userRouter } from './routes/userRouter';
import LayoutTheme from './HOC/LayoutTheme';
import './sass/index.scss';
import Spinner from './components/Spinner/Spinner';
function App() {
	return (
		<div className='App container-main'>
			<Spinner />
			<BrowserRouter>
				<Routes>
					{userRouter.map((e, i) => {
						return (
							<Route
								key={i}
								path={e.path}
								element={<LayoutTheme component={e.component} />}
							/>
						);
					})}
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
