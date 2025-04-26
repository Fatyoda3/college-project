import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import path from 'path';
import fs from 'fs/promises';
import url from 'url';

configDotenv();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filePath = path.join(import.meta.url);

const PORT = process.env.PORT || 8000;
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public'))); // literally just a folder with static files

server.post('/api/bookings', (req, res) => {
	const { name, email, phone, checkin, checkout, roomtype, guests } =
		req.body;
	console.log(name, email, phone, checkin, checkout, roomtype, guests);
	const countPath = path.join(__dirname, 'bookingsCount.txt');
	const count = fs.readFile(countPath);
	console.log(count);

	const bookingPath = path.join(__dirname, 'bookings');
});

server.listen(PORT, () => {
	console.log('Server is running on ' + PORT);
});
