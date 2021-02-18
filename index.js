const express = require('express');
const app = express();

let port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>Hello Express</h1>');
});

let rooms = [
	{
		seats: 3,
		animeties: ['free food', 'free cleaning', 'free WiFi'],
		price: '$12',
		_id: 1,
		room_name: 'Villas',
	},
];

let bookings = [
	{
		id: 1,
		customer_name: 'Visshnnu',
		date: '17-02-2021',
		start_time: '7:00',
		end_time: '21:00',
		room_id: 1,
	},
];

let bookedRooms = [];
let bookedCustomers = [];

app.get('/rooms', (req, res) => {
	res.json(rooms);
});

app.post('/rooms', (req, res) => {
	rooms.push({
		seats: req.body.seats,
		animeties: req.body.animeties,
		price: req.body.price,
		id: rooms.length + 1,
		booking_status: true,
		room_name: req.body.room_name,
	});
	res.json({
		message: 'Room created',
	});
});

app.get('/bookings', (req, res) => {
	res.json(bookings);
});

app.post('/bookings', (req, res) => {
	const room = rooms.find((rm) => rm.id === req.body.room_id);
	console.log(room.room_name);
	bookings.push({
		id: bookings.length + 1,
		customer_name: req.body.customer_name,
		date: req.body.date,
		start_time: req.body.start_time,
		end_time: req.body.end_time,
		room_id: req.body.room_id,
		room_name: room.room_name,
	});
	bookedRooms.push(room.room_name);
	bookedCustomers.push(req.body.customer_name);
	console.log(bookedRooms);
	console.log(bookedCustomers);

	res.json({
		message: 'Booking done',
	});
});

app.listen(port, () => console.log(`server stared on port : ${port}`));
