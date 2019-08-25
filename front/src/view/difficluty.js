const $difficulty = document.querySelector('.difficulty')
const $normalBtn = document.querySelector('.normal');
const $hardBtn = document.querySelector('.hard');

window.difficluty = null;



$normalBtn.addEventListener('click', () => {
	window.difficluty = 'normal';
	$difficulty.style.display = 'none'
});

$hardBtn.addEventListener('click', () => {
	window.difficluty = 'hard';
	$difficulty.style.display = 'none'
});
