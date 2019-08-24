const five = require("johnny-five");
const board = new five.Board();

const THRESHOLD = 200;

module.exports = (callback) => {
    board.on("ready", () => {
        let canStamp = true;

        const led = new five.Led(13);
        led.strobe();

        const left = new five.Sensor("A0");
        const right = new five.Sensor("A1");

        left.on('change', (value) => {
            if(value < THRESHOLD) {
                if(!canStamp) return;
                console.log(`Left: HIT`);
                callback()
                canStamp = false;
            } else {
                canStamp = true;
            }
        });

        right.on('change', (value) => {
            if(value < THRESHOLD) {
                if(!canStamp) return;
                console.log(`Right: HIT`);
                callback()
                canStamp = false;
            } else {
                canStamp = true;
            }
        });
    });
}
