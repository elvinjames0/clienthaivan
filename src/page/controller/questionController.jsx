export const handleChangeColor = () => {
	const quizContent = document.getElementById('quiz-content');
	const quizItem = quizContent.querySelectorAll('.quiz-item');
	for (let i = 0; i < quizItem.length; i++) {
		let quiz = quizItem[i];
		quiz.addEventListener('click', function () {
			let active = document.querySelector('.active');
			active.className = active.className.replace('active', ' ');
			let flag = false;
			quiz.querySelectorAll('input[type="checkbox"]').forEach((e, i) => {
				if (e?.checked) {
					flag = true;
				}
			});
			quiz.style.backgroundColor = flag ? '#B4FF9F' : 'white';
			this.className += ' active';
		});
	}
};
export const handleChangeColorTest = () => {
	let header = document.getElementById('test-container');
	let btns = header.getElementsByClassName('item-list2');
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function () {
			let current = document.querySelector('.activeTest');
			current.className = current.className.replace(' activeTest', ' ');
			this.className += ' activeTest';
		});
	}
};
export const handleOnKeyUp = () => {
	document.body.onkeyup = function (event) {
		let elm = document.querySelector('.quiz-item.active');
		elm.querySelectorAll('input[type="checkbox"]').forEach((e, i) => {
			if (i + 1 == Number(event.key)) {
				e.checked = !e.checked;
			}
		});
	};
};
