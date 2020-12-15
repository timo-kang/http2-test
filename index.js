const spdy = require('spdy');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const http = require('http');
const https = require('https');

const options = {
	key: fs.readFileSync('./server.key'),
	cert: fs.readFileSync('./server.crt'),
	passphrase: 'redwit2020'
}

const app = express();
app.use(express.static('static'));
app.use(cors());

app.get("/test", (req,res) => {
	res.send('hello world!');
});

app.get("/f100", (req, res) => {
	const frames = require('./frames');
	res.send(frames.f_100ms);
	//res.send(frames.f_100ms.concat(frames.f_100ms).concat(frames.f_100ms).concat(frames.f_100ms).concat(frames.f_100ms).concat(frames.f_100ms).concat(frames.f_100ms));
});

app.get("/f20", (req,res) => {
	const frames = require('./frames');
	res.send(frames.f_20ms.concat(frames.f_20ms).concat(frames.f_20ms));
});

app.get("/f10", (req,res) => {
	const frames = require('./frames');
	res.send(frames.f_10ms.concat(frames.f_10ms).concat(frames.f_10ms).concat(frames.f_10ms).concat(frames.f_10ms).concat(frames.f_10ms));
});


const port = 3000;
//spdy.createServer( options, app )
http.createServer(app)
	.listen(port, (err) => {
		if(err) {
			console.error('error:', err);
			return;
		}
		console.log(`App started listening on Port ${port}`);
	});

