import bodyParser from 'body-parser';
import cors from 'cors';
import { handler } from './build/handler.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import express from 'express';
import { createServer } from 'http';

const port = 3000;
const app = express();
const server = createServer(app);

// app.use(bodyParser.json({ limit: '100mb' }));
// app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(
	cors({
		origin: '*'
	})
);

app.get('/users', async (req, res) => {
	const users = await prisma.user.findMany();
	console.log(JSON.stringify(users));
	res.json(users);
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

//start our server
server.listen(process.env.PORT || port, () => {
	console.log(`Server started on port ${server.address().port} :)`);
});
