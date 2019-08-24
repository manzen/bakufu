const server = require("ws").Server;
const device = require('./device');
const s = new server({port: 5001});

let timerId = null;

s.on("connection", ws => {
    device.init(() => {
    	if(timerId) {
    		clearTimeout(timerId);
		    timerId = null;
	    }

	    ws.send("play");

	    timerId = setTimeout(() => {
		    ws.send("stop")
			device.reset()
	    }, 1000);
    })
});
