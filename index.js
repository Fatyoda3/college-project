import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import path from 'path';
import fs from 'fs/promises';
import url from 'url';
let sessionSecret = Math.floor(Math.random() * 1024 * 1024 * 1024);
setInterval(() => {
	sessionSecret = Math.floor(Math.random() * 1024 * 1024 * 1024);
	console.log(sessionSecret, 'changed');
}, 60 * 30 * 1000 /* will update the token within 30 minutes  so brute forcing the token is hard */);

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
	res.send(count);
	// res.send(`console.log("booked") ;/*  localStorage.setItem("id","${count}"); */`);
	fs.writeFile(countPath, String((count += 1)));
});

//handle deletion of bookings
server.delete('/bookings/delete', (req, res) => {});
server.post('/admin', async (req, res) => {
	console.log(req.body.secret, sessionSecret);

	console.log(Number(req.body.secret) == sessionSecret);
	if (Number(req.body.secret) === sessionSecret) {
		const bookings = path.join(__dirname, 'bookings');

		let paths = await fs.readdir(bookings);
		// console.log(paths);

		paths = paths.map((val) => path.join(__dirname, 'bookings', val));
		// console.log(paths);

		let dataArr = [];

		for (const path of paths) {
			let data = await fs.readFile(path, 'utf8');
			dataArr.push(data);
		}
		console.log(dataArr);

		res.send(JSON.stringify(dataArr));
	} else {
		res.send(
			'alert("access denied");localStorage.removeItem("secret"/*  , null */);',
		);
	}
});
server.post('/api/admin/login', async (req, res) => {
	try {
		if (req.body) {
			// Validate username and password
			const { user, pass } = req.body;

			if (process.env.user !== user) {
				console.log('Invalid username');
				return res.status(401).send('Access Denied: Invalid Username');
			}

			if (process.env.pass !== pass) {
				console.log('Invalid password');
				return res.status(401).send('Access Denied: Invalid Password');
			}

			console.log('Login initiated');

			// Serve the admin page
			// const adminPagePath = path.join(__dirname, 'public', 'admins', 'admin.html');
			// const data = await fs.readFile(adminPagePath, 'utf8'); // Ensure encoding is set
			// res.status(200).send(data);

			// res.redirect('/admins/admin.html')
			console.log(sessionSecret);
			return res
				.status(200)
				.send(`localStorage.setItem('secret' , ${sessionSecret})`);
		} else {
			res.status(400).send('Bad Request: Missing login data');
		}
	} catch (error) {
		console.error('Error during login:', error);
		res.status(500).send('Internal Server Error');
	}
});
server.listen(PORT, () => {
	console.log('Server is running on ' + PORT);
});

/* let sendBookings = async () => {
	const bookings = path.join(__dirname, 'bookings');

	let paths = await fs.readdir(bookings);
	// console.log(paths);

	paths = paths.map((val) => path.join(__dirname, 'bookings', val));
	// console.log(paths);

	let dataArr = [];

	for (const path of paths) {
		let data = await fs.readFile(path, 'utf8');
		dataArr.push(data);
	}
	console.log(dataArr);
};
 */
