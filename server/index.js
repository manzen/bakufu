const server = require("ws").Server;
const device = require('./device');
const s = new server({port: 5001});

let timerId = null;
/* 普通が500 */
/* 難しいが250 */
const delay = 500;

const setupWS = () => {
	return new Promise((resolve) => {
		s.on("connection", ws => {
			resolve(ws)
		});
	})
};

(async () => {
	const ws = await setupWS()

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
})();
