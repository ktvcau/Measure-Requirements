const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const Chart = require('chart.js');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const htmlPath = path.join(__dirname, 'index.html');
const jsonFilePath = path.join(__dirname, 'requestCount.json');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

let requestCount = 0;
let maxRequestHistory = 0;

app.get('/', (req, res) => {

    requestCount++;

    res.send(htmlContent);

    saveRequestCountToJson();

    broadcastRequestCount();
});

app.get('/api/requestCount', (req, res) => {
    res.json({ count: requestCount });
});

function saveRequestCountToJson() {
    const data = { count: requestCount };
    fs.writeFileSync(jsonFilePath, JSON.stringify(data), 'utf8');
}

function resetRequestCount() {
    requestCount = 0;
    saveRequestCountToJson();
}

function readRequestCountFromJson() {
    try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        const jsonData = JSON.parse(data);
        requestCount = jsonData.count;
    } catch (error) {
        console.error('Error reading request count from JSON file:', error.message);
    }
}

function broadcastRequestCount() {

    const data = JSON.stringify({ count: requestCount });
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
}

readRequestCountFromJson();

setInterval(() => {
    if (requestCount > maxRequestHistory) {
        maxRequestHistory = requestCount;
    } else {
        maxRequestHistory = Math.max(maxRequestHistory - 1, 0);
    }
    broadcastRequestCount();
}, 2000);

app.use((req, res, next) => {
    setTimeout(() => {
        resetRequestCount();
    }, 2000);
    next();
});

server.on('close', () => {
    console.log('Server closed. Restarting...');
    server.listen();
});

server.listen(() => {
});

process.on('SIGINT', () => {
    console.log('Received SIGINT. Shutting down gracefully...');
    saveRequestCountToJson();
    process.exit(0);
});
