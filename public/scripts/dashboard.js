function toggleSidebar() {
	var sidebar = document.getElementById('sidebar');
	var content = document.getElementById('content');
	var toggleButton = document.querySelector('.sidebar-toggle');

	sidebar.classList.toggle('shrink');
	content.classList.toggle('shrink');
	toggleButton.classList.toggle('shrink');
}

// Slide Image :---
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config parameter
let countItem = items.length;
let itemActive = 0;

// event next click
if (next)
	next.addEventListener('click', function () {
		itemActive = itemActive + 1;
		if (itemActive >= countItem) {
			itemActive = 0;
		}
		showSlider();
	});
//event prev click
prev
	? (prev.onclick = function () {
			itemActive = itemActive - 1;
			if (itemActive < 0) {
				itemActive = countItem - 1;
			}
			showSlider();
	  })
	: null;
// auto run slider
let refreshInterval = setInterval(() => {
	if (next) next.click();
	else clearInterval(refreshInterval);
}, 5000);

function showSlider() {
	// remove item active old
	let itemActiveOld = document.querySelector('.slider .list .item.active');
	let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
	itemActiveOld.classList.remove('active');
	thumbnailActiveOld.classList.remove('active');

	// active new item
	items[itemActive].classList.add('active');
	thumbnails[itemActive].classList.add('active');

	// clear auto time run slider
	clearInterval(refreshInterval);
	refreshInterval = setInterval(() => {
		next.click();
	}, 5000);
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener('click', () => {
		itemActive = index;
		showSlider();
	});
});
