const server = require("ws").Server;
const device = require('./device');
const s = new server({port: 5001});

let timerId = null;

s.on("connection", ws => {
    device(() => {
    	if(timerId) {
    		clearTimeout(timerId);
		    timerId = null;
	    }

	    ws.send("play");
	    console.log('hoge');

	    timerId = setTimeout(() => {
		    ws.send("stop")
	    }, 1000);
    })
});
