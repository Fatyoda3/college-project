document.addEventListener('DOMContentLoaded', function () {
	console.log();

	const hotels = [
		{
			id: 1,
			name: 'Iconic',
			address: '1903 St, LaSanta Alley, 21',
			price: '$1000',
			rating: 4.48,
			image: '../Hotel-Bedroom/Image 1.jpg',
		},
		{
			id: 2,
			name: 'Glossy Twin Villa',
			address: '148 St, Locho Alley, 11028',
			price: '$3,499',
			rating: 5.0,
			image: '../Hotel-Bedroom/Image 2.jpg',
		},
		{
			id: 3,
			name: 'Palmasantos Hosting House',
			address: '172 St, Palma Alley, 10911',
			price: '$949',
			rating: 4.96,
			image: '../Hotel-Bedroom/Image 4.jpg',
		},
		{
			id: 1,
			name: 'Individual Modern House',
			address: '1903 St, LaSanta Alley, 21',
			price: '$1,099',
			rating: 4.48,
			image: '../Hotel-Bedroom/Image 2.jpg',
		},
	];
	let id;
	let t = new URLSearchParams(this.URL);
	for (const key in t) {
		id = t[key];
	}
	let currHotel = hotels[id];
	document.querySelector('.hero-image').src = currHotel.image;
	document.querySelector('.hotel-name').textContent = currHotel.name;
	document.querySelector('.hotel-address').textContent = currHotel.address;
	document.querySelector('.hotel-rating').textContent = currHotel.rating;
	document.querySelector('.hotel-price').textContent = currHotel.price;
	document.querySelector('.hotel-description').textContent =
		currHotel.description;
	document.querySelector('.hotel-details-text').textContent =
		currHotel.details;

	document
		.querySelector('.book-now-button')
		.addEventListener('click', function () {
			alert('Booking process for ' + currHotel.name);
		});
});

// for image swapping :----
function swapHeroImage(src) {
	document.getElementById('hero-image').src = src;
	console.log(this);
}
