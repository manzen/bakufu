const $difficulty = document.querySelector('.difficulty')
const $normalBtn = document.querySelector('.normal');
const $hardBtn = document.querySelector('.hard');

window.difficluty = null;

$normalBtn.addEventListener('click', () => {
	window.difficluty = 'normal';
	$difficulty.style.display = 'none'
	websocket()
});

$hardBtn.addEventListener('click', () => {
	window.difficluty = 'hard';
	$difficulty.style.display = 'none'
	websocket()
});


function websocket() {
	const sock = new WebSocket("ws://127.0.0.1:5001");
	let is_play = false;

	sock.addEventListener("open", e => {
		console.log("disconnect", e.data);
		if (window.difficluty === 'hard') {
			sock.send('hard')
		} else {
			sock.send('normal')
		}
	});

	sock.addEventListener("message", e => {
		console.log(e.data, is_play === false);
		if (e.data === "play" && is_play === false) {
			is_play = true;
			if (window.difficluty === 'hard') {
				play(2.0);
				autoscroll(35 / 2);
			} else {
				play();
				autoscroll();
			}

		} else if (e.data === "stop") {
			is_play = false;
			stop();
			autoscroll();
		}
		console.log("receive", e.data);
	});

	sock.addEventListener("close", e => {
		console.log("kill", e.data);
	});

	sock.addEventListener("error", e => {
		console.log("error", e.data);
	});

}
