const five = require("johnny-five");
const THRESHOLD = 200;

let board = null;
let canStamp = true;

module.exports = {
	init: (callback) => {
		board = new five.Board();
		board.on("ready", () => {

			const led = new five.Led(13);
			led.strobe();

			const left = new five.Sensor("A0");
			const right = new five.Sensor("A1");

			left.on('change', (value) => {
				if (value < THRESHOLD) {
					if (!canStamp) return;
					console.log(`Left: HIT`);
					callback()
					canStamp = false;
				} else {
					canStamp = true;
				}
			});

			right.on('change', (value) => {
				if (value < THRESHOLD) {
					if (!canStamp) return;
					console.log(`Right: HIT`);
					callback()
					canStamp = false;
				} else {
					canStamp = true;
				}
			});
		});
	},
	reset() {
		let canStamp = true;
	}
}

