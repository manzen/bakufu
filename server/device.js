const five = require("johnny-five");
const board = new five.Board();

const THRESHOLD = 200;

module.exports = () => {
    return new Promise(resolve => {
        board.on("ready", () => {
            const led = new five.Led(13);

            led.strobe();

            const left = new five.Sensor("A0");
            const right = new five.Sensor("A1");

            left.on('change', (value) => {
                if(value < THRESHOLD) {
                    console.log(`Left: HIT`);
                }
            });

            right.on('change', (value) => {
                if(value < THRESHOLD) {
                    console.log(`Right: HIT`);
                }
            });

            resolve();
        });
    })
}
