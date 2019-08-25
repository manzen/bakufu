const audio = new Audio();
audio.src = "../../resources/ultra_soul.mp3";

function play(scale = 1.0) {
	if (window.audioSrc && audio.src.match(".+/(.+?)([\?#;].*)?$")[1] !== window.audioSrc.match(".+/(.+?)([\?#;].*)?$")[1]) {
		audio.src = window.audioSrc;
	}
	audio.playbackRate = scale
	audio.play();
}

function stop() {
	audio.pause();
}

audio.addEventListener('end', () => {
	window.scrollTo(0, 0)
})

