const server = require("ws").Server;
const device = require('./device');
const s = new server({port: 5001});

let timerId = null;
/* 普通が500 */
/* 難しいが250 */
let delay = 500;

const setupWS = () => {
	return new Promise((resolve) => {
		s.on("connection", ws => {
			resolve(ws)
		});
	})
};

const getDifficlty = (ws) => {
	return new Promise((resolve) => {
		ws.on("message", message => {
			console.log(message);
			delay = message === 'hard' ? 500 : 250;
			resolve()
		});
	})
}

(async () => {
	const ws = await setupWS()

	await getDifficlty(ws)
	device.init(() => {
		if(timerId) {
			clearTimeout(timerId);
			timerId = null;
		}

		ws.send("play");

		timerId = setTimeout(() => {
			ws.send("stop");
			device.reset();
		}, delay);
	});

	ws.on('close',() => {
		console.log('I lost a client');
	});
})();
