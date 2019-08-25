const normalBtn = document.querySelector('.normal');
const hardBtn = document.querySelector('.normal');

window.difficluty = null;

normalBtn.addEventListener('click', () => {
	window.difficluty = 'normal'
});

hardBtn.addEventListener('click', () => {
	window.difficluty = 'hard'
});
