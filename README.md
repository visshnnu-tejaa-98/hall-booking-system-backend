# hall-booking-system-backend

In "/rooms" you will get all the rooms(get route)
In "/rooms" you can add the room for example use the given room (post route)

{
    "seats": 4,
    "animeties": [ "no free Items" ],
    "price": 12,
    "_id": 1,
    "room_name":"Nivas"
}

In "/bookings" you will get all the customers who has booked the room(get route)
In "/bookings" you can add the customer booking of a room, for example you can give the following data

{
    "customer_name": "Arun",
    "date": "19-02-2021",
    "start_time": "8:00",
    "end_time": "17:00",
    "room_id": 2
}

after performing the above process you will get booked rooms list and customers who booked the room will print in the console.
