const server = require("ws").Server;
const s = new server({port: 5001});

s.on("connection", ws => {
    ws.send("play");
});