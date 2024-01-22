import { Button, Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
export const QuestionFooter = ({
	handleAnswer,
	text,
	data,
	score,
	isModalOpen,
	setIsModalOpen,
	setIsConfirmRestart,
	uncheck,
	number,
}) => {
	const navigate = useNavigate();
	const renderContent = () => {
		if (score >= data.numCorrect && number.length > 0) {
			return ` KẾT QUẢ : KHÔNG ĐẠT`;
		} else if (score >= data.numCorrect) {
			return ` KẾT QUẢ : ĐẠT`;
		} else {
			return ` KẾT QUẢ : KHÔNG ĐẠT`;
		}
	};
	const renderParalysis = () => {
		if (number.length > 0) {
			let a = number.map((e) => {
				return '' + e + '';
			});
			return `Đã trả lời sai câu hỏi điểm liệt tại vị trí số : ${a}`;
		}
		return;
	};
	const handleOk = () => {
		setIsConfirmRestart(true);
		setIsModalOpen(false);
	};
	const handleCancelResult = () => {
		setIsConfirmRestart(true);
		setIsModalOpen(false);
		navigate(-1);
	};
	return (
		<div
			onClick={() => {
				handleAnswer();
			}}
			className='quiz-quit flex justify-center items-center'
			style={{
				border: '2px solid #EB1D36',
				borderRadius: '0 0 15px 15px',
				maxHeight: '5%',
			}}
		>
			{
				<Modal
					title='KẾT QUẢ BÀI KIỂM TRA'
					visible={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancelResult}
					footer={[
						<Button key='submit' type='primary' onClick={handleOk}>
							Xem lại bài
						</Button>,
						<Button key='back' onClick={handleCancelResult}>
							Thoát
						</Button>,
					]}
				>
					<div>
						<div className='grid grid-cols-2'>
							<div>
								<p>
									Câu đúng : {score}/{data.questions.length}
								</p>
								<p>Số câu sai : {data.questions.length - score}</p>
								<p>Số câu chưa trả lời : {uncheck.length}</p>
							</div>
							<div>
								<p>{renderContent()}</p>
							</div>
						</div>
						<p>{renderParalysis()}</p>
					</div>
				</Modal>
			}
			<span id='quiz-restart' className='font-bold text-sm '>
				{text}
			</span>
		</div>
	);
};
