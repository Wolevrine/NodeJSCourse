const WebSocket = require('ws');
const http = require('http');
const path = require('path');
const fs = require('fs');

const setupWebSocketServer = server => {
    //initalize the server 
    const wss = new WebSocket.Server({server});

    //handlers
    wss.on('connection', ws => {
        ws.on('message', message =>{
            console.log(`recevied: ${message}`);
            wss.clients.forEach(c => {
                if (c.readyState === WebSocket.OPEN)
                {
                    c.send(message);
                }
            });
        });
        console.log('client connected');
        ws.send('welcome to jamaica');
    });
}

module.exports = { setupWebSocketServer };

