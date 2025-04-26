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

server.post('/api/bookings', async (req, res) => {
	/* const { name, email, phone, checkin, checkout, roomtype, guests } =
		req.body; */
	// console.log(name, email, phone, checkin, checkout, roomtype, guests);

	const countPath = path.join(__dirname, 'bookingCount.txt');

	let count = await fs.readFile(countPath, 'utf8');

	console.log((count = Number(count)));

	const bookingPath = path.join(__dirname, 'bookings');

	const CurrBooking = path.join(bookingPath, `${count + '.json'}`);

	fs.writeFile(CurrBooking, JSON.stringify(req.body));

	fs.writeFile(countPath, String((count += 1)));


	res.send('console.log("booked")')
});


server.post ('/api/admin/login' , async(req ,res )=>{

	
})
server.listen(PORT, () => {
	console.log('Server is running on ' + PORT);
});
