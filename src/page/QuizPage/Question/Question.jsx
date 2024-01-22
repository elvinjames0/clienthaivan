import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { quizService } from '../../../services/questionService';
import { QuestionItem } from './QuestionItem';
import { QuestionTimeCountDown } from './QuestionTimeCountDown';
import { QuestionFooter } from './QuestionFooter';
import { useLocation, useParams } from 'react-router';
import { useWindowSize } from '../../../Hook/useWindowSize';
export const Question = ({ setImg }) => {
	const { id } = useParams();
	const location = useLocation();
	const windowSize = useWindowSize();
	let [score, setScore] = useState(0);
	const [data, setData] = useState();
	const [currentQuiz, setCurrentQuiz] = useState();
	const [isAnnouce, setIsAnnouce] = useState(false);
	const [text, setText] = useState(`KẾT THÚC`);
	const [isConfirmEndTest, setIsConfirmEndTest] = useState(false);
	const [isRestart, setIsRestart] = useState(false);
	let [time, setTime] = useState({
		minutes: 0,
		seconds: 0,
	});
	const showAnnouce = () => {
		setIsAnnouce(true);
	};
	const handleAnnouce = () => {
		setIsConfirmEndTest(true);
		setIsAnnouce(false);
	};
	const handleCancelAnnouce = () => {
		setIsAnnouce(false);
	};
	const [isConfirmRestart, setIsConfirmRestart] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [number, setNumber] = useState([]);
	const [uncheck, setUncheck] = useState([]);
	const handleParalysis = (num) => {
		number.push(num);
	};
	const handleUnChecked = (num) => {
		uncheck.push(num);
	};

	const handleAnswer = () => {
		if (isRestart === false) {
			if (isConfirmEndTest === true) {
				const quizContainer = document.getElementById('quiz-content');
				const answerContainers = quizContainer.querySelectorAll('.quiz-item');
				const inputContainer = quizContainer.querySelectorAll('.container-input');
				data?.questions?.forEach((e, i) => {
					const answerContainer = answerContainers[i];
					const changeColor = () => {
						const highLight = inputContainer[i].querySelectorAll('div');
						highLight[e.correct - 1].className = 'highLight-correct';
						answerContainers[i].className = 'quiz-incorrect gap-3';
						answerContainers[i].style.backgroundColor = '#ff1818';
					};
					const userAnswer = Array.from(answerContainer.querySelectorAll('input[type="checkbox"]:checked'));
					console.log('userAnswer: ', userAnswer);
					if (userAnswer.length === 1) {
						if (userAnswer[0]?.value == e.correct) {
							setScore(score++);
							answerContainers[i].className = 'quiz-correct gap-3';
							answerContainers[i].style.backgroundColor = '#B4FF9F';
						} else {
							if (e.paralysis == 1) handleParalysis(i + 1);
							changeColor();
						}
					} else {
						if (e.paralysis == 1) handleParalysis(i + 1);
						if (userAnswer.length === 0) handleUnChecked(i);
						changeColor();
					}
				});
				showModal();
				setScore(score);
				setText(` Làm lại bài thi`);
				document.getElementById('quiz-time').innerHTML = 'Hoàn thành bài thi';
				setIsRestart(true);
			} else {
				showAnnouce();
			}
		}
		if (isRestart === true && isConfirmRestart === true) {
			window.location.reload();
		}
	};
	const countDownClock = (number, format) => {
		let countdown;
		convertFormat(format);
		function convertFormat(format) {
			switch (format) {
				case 'seconds':
					return timer(number);
				case 'minutes':
					return timer(number * 60);
				default:
					break;
			}
		}
		function timer(seconds) {
			const now = Date.now();
			const then = now + seconds * 1000;
			countdown = setInterval(() => {
				const secondsLeft = Math.round((then - Date.now()) / 1000);
				if (secondsLeft == 0) {
					setTimeout(() => {
						setIsConfirmEndTest(true);
						clearInterval(countdown);
						return;
					}, 100);
				}
				displayTimeLeft(secondsLeft);
			}, 1000);
		}
		function displayTimeLeft(seconds) {
			setTime({
				minutes: (time.minutes = Math.floor(((seconds % 86400) % 3600) / 60)),
				seconds: (time.seconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60),
			});
		}
	};
	useEffect(() => {
		if (location.pathname == `/kiem-tra-bo-de-thi/${id}`) {
			quizService
				.getTestById(id)
				.then((res) => {
					setData(res.data);
					setImg(res?.data?.questions[0].img);
					countDownClock(res?.data?.time, 'minutes');
					setCurrentQuiz(res?.data?.questions[0]);
				})
				.catch((err) => {});
		} else {
			quizService
				.getDanhSachThiThu(id)
				.then((res) => {
					setData(res.data);
					setImg(res?.data?.questions[0].img);
					countDownClock(res?.data?.time, 'minutes');
					setCurrentQuiz(res?.data?.questions[0]);
				})
				.catch((err) => {});
		}
	}, []);
	useEffect(() => {
		if (isConfirmEndTest === true) {
			handleAnswer();
		}
	}, [isConfirmEndTest]);
	return (
		data &&
		windowSize.width && (
			<div
				className='quiz-question w-2/5  '
				style={{
					borderRadius: '15px',
					boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
				}}
			>
				{
					<Modal
						title='THÔNG BÁO'
						visible={isAnnouce}
						onOk={handleAnnouce}
						onCancel={handleCancelAnnouce}
						footer={[
							<Button key='submit' type='primary' onClick={handleAnnouce}>
								Yes
							</Button>,
							<Button key='back' onClick={handleCancelAnnouce}>
								No
							</Button>,
						]}
					>
						<p>BẠN CÓ CHẮC CHẮN MUỐN DỪNG BÀI THI? </p>
					</Modal>
				}
				<QuestionTimeCountDown time={time} />
				<QuestionItem data={data} setImg={setImg} currentQuiz={currentQuiz} />
				<QuestionFooter
					handleAnswer={handleAnswer}
					text={text}
					data={data}
					number={number}
					uncheck={uncheck}
					score={score}
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					setIsConfirmRestart={setIsConfirmRestart}
				/>
			</div>
		)
	);
};
