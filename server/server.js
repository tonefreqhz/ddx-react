const express = require('express')
const next = require('next')
const helmet = require('helmet')
require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
const ROOT_URL = `localhost:${port}`
const app = next({ dev });
const handle = app.getRequestHandler();

const URL_MAP = {
	// example URL_MAP
	// '/load': '/public/load'
};

app.prepare().then(() => {
	const server = express()
	server.use(helmet())
	if (!dev) {
		server.set('trust proxy', 1);
	}
	
	server.get('*', (req, res) => {

		const url = URL_MAP[req.path];
		if (url) {
			const {query} = req.query
			app.render(req, res, url, query);
		} else {
			handle(req, res);
		}
	});
	
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on ${ROOT_URL}`);
	});
	
});