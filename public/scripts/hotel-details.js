document.addEventListener('DOMContentLoaded', function () {
	// Get the hotel data from localStorage
	// const hotelData = JSON.parse(localStorage.getItem("selectedHotel"));

	// if (hotelData) {
	// Set the hotel details in the page
	document.querySelector('.hero-image').src = hotelData.imageSrc;
	document.querySelector('.hotel-name').textContent = hotelData.name;
	document.querySelector('.hotel-address').textContent = hotelData.address;
	document.querySelector('.hotel-rating').textContent = hotelData.rating;
	document.querySelector('.hotel-price').textContent = hotelData.price;
	document.querySelector('.hotel-description').textContent =
		hotelData.description;
	document.querySelector('.hotel-details-text').textContent =
		hotelData.details;
	// } else {
	// Handle the case where no hotel data is available
	// console.error("No hotel data found in localStorage");
	// }

	// Book Now button click event
	document
		.querySelector('.book-now-button')
		.addEventListener('click', function () {
			alert('Booking process for ' + hotelData.name);
			// Implement booking logic here
		});

	// More Info button click event
	document
		.querySelector('.more-info-button')
		.addEventListener('click', function () {
			alert('More info about ' + hotelData.name);
			// Implement more info logic here
		});
});

// for image swapping :----
function swapHeroImage(src, id) {
	document.getElementById('hero-image').src = src;
	console.log(this);
}
