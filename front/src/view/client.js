const sock = new WebSocket("ws://127.0.0.1:5001");
let is_play = false;

sock.addEventListener("open", e => {
	console.log("disconnect", e.data);
});

sock.addEventListener("message", e => {
	console.log(e.data, is_play === false);
	if (e.data === "play" && is_play === false) {
		is_play = true;
		if(window.difficluty === 'hard') {
			play(2.0);
		} else {
			play();
		}
		autoscroll();

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
