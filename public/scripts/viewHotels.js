const hotels = [
    {
        id: 1,
        name: "Iconic",
        address: "1903 St, LaSanta Alley, 21",
        price: "$1000",
        rating: 4.48,
        image: "../Hotel-Bedroom/Image 1.jpg"
    },
    {
        id: 2,
        name: "Glossy Twin Villa",
        address: "148 St, Locho Alley, 11028",
        price: "$3,499",
        rating: 5.00,
        image: "../Hotel-Bedroom//Image 2.jpg"
    },
    {
        id: 3,
        name: "Palmasantos Hosting House",
        address: "172 St, Palma Alley, 10911",
        price: "$949",
        rating: 4.96,
        image: "../Hotel-Bedroom/Image 4.jpg"
    },
    {
        id: 1,
        name: "Iconic",
        address: "1903 St, LaSanta Alley, 21",
        price: "$1000",
        rating: 4.48,
        image: "../Hotel-Bedroom/Image 1.jpg"
    },
    {
        id: 2,
        name: "Glossy Twin Villa",
        address: "148 St, Locho Alley, 11028",
        price: "$3,499",
        rating: 5.00,
        image: "../Hotel-Bedroom//Image 2.jpg"
    },
    {
        id: 3,
        name: "Palmasantos Hosting House",
        address: "172 St, Palma Alley, 10911",
        price: "$949",
        rating: 4.96,
        image: "../Hotel-Bedroom/Image 4.jpg"
    },
  
];

function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'card';

    const link = document.createElement('a');
    link.href = `hotel-details.html?id=${hotel.id}`;

    const img = document.createElement('img');
    img.src = hotel.image;
    img.alt = hotel.name;

    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    const hotelName = document.createElement('h3');
    hotelName.textContent = hotel.name;

    const hotelAddress = document.createElement('p');
    hotelAddress.textContent = hotel.address;

    const price = document.createElement('div');
    price.className = 'price';
    price.innerHTML = `${hotel.price} <span>Total</span>`;

    cardDetails.appendChild(hotelName);
    cardDetails.appendChild(hotelAddress);
    cardDetails.appendChild(price);

    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.innerHTML = `<span>${hotel.rating}</span>`;

    const wishlist = document.createElement('div');
    wishlist.className = 'wishlist';
    wishlist.innerHTML = `&#9829;`;

    link.appendChild(img);
    link.appendChild(cardDetails);
    link.appendChild(rating);
    link.appendChild(wishlist);

    card.appendChild(link);

    return card;
}

function renderHotelCards() {
    const container = document.querySelector('.content');
    hotels.forEach(hotel => {
        const card = createHotelCard(hotel);
        container.appendChild(card);
    });
}

renderHotelCards();

