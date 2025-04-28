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
];
/* 	let id; */
let id = 0;
document.addEventListener('DOMContentLoaded', function () {
	let t = new URLSearchParams(new URL(this.URL).search); //new URLSearchParams(new URL(url).search);
	// console.log(t['id']);
	// console.log(t);
	/* let  */ id = Number(t.get('id')) - 1;
	let currHotel = hotels[id];
	// console.table(currHotel, hotels, t, id);
	//documenting so sometimes we forget indexes start from 0 so be careful folks
	document.querySelector('.hero-image').src = currHotel.image;
	document.querySelector('.hotel-name').textContent = currHotel.name;
	document.querySelector('.hotel-address').textContent = currHotel.address;
	document.querySelector('.hotel-rating').textContent = currHotel.rating;
	document.querySelector('.hotel-price').textContent = currHotel.price;
	/* document.querySelector('.hotel-description').textContent =
		currHotel.description;
	document.querySelector('.hotel-details-text').textContent =
		currHotel.details; */

	document
		.querySelector('.book-now-button')
		.addEventListener('click', function () {
			alert('Booking process for ' + currHotel.name);
		});

	const images = document.querySelectorAll('.a1');
	// console.log(images);

	images.forEach((el) => {
		let path = '../Hotel-Bedroom/';
		//Image 4(4).jpg

		/* document.getElementById('hero-image') .src  */
		el.src = path + `Image ${id + 1}(${el.id}).jpg`;
	});
});

function swapHeroImage(n) {
	let path = '../Hotel-Bedroom/';
	//Image 4(4).jpg

	document.getElementById('hero-image').src =
		path + `Image ${id + 1}(${n}).jpg`;
}
