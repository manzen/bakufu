const $musicSelect = document.querySelector('.music-select')
const $runnerBtn = document.querySelector('.runner');
const $ultraSoulBtn = document.querySelector('.ultra-soul');
const $runnerShortBtn = document.querySelector('.runner-short');

window.audioSrc = null;



$runnerBtn.addEventListener('click', () => {
	window.audioSrc = "../../resources/runner.mp3";
	$musicSelect.style.display = 'none'
});

$ultraSoulBtn.addEventListener('click', () => {
	window.audioSrc = '../../resources/ultra_soul.mp3';
	$musicSelect.style.display = 'none'
});

$runnerShortBtn.addEventListener('click', () => {
	window.audioSrc = "../../resources/runner￿_short.mp3";
	$musicSelect.style.display = 'none'
});
