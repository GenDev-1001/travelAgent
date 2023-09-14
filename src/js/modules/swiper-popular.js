import Swiper from "swiper/bundle";

import "swiper/css/bundle";

function swiperFunc() {
	const swiper = new Swiper("#swiper-popular", {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: "#sliderNext",
			prevEl: "#sliderPrev",
		},
		breakpoints: {
			460: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			800: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
			1060: {
				slidesPerView: 4,
				spaceBetween: 32,
			},
		},
	});
}

export default swiperFunc;
