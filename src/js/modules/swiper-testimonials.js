import Swiper from "swiper/bundle";

import "swiper/css/bundle";

function swiperTestimonials() {

let swiper1;
let swiper2;
let swiper3;
let swiperHorizontal;

const configVertical = {
	direction: "vertical",
	slidesPerView: "auto",
	spaceBetween: 0,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
};

const configHorizontal = {
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 32,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
	breakpoints: {
		770: {
			slidesPerView: 2,
			spaceBetween: 25,
		},
	},
};


const breakpoint = window.matchMedia("(max-width: 1023px)");

const breakpointChecker = () => {
	if (breakpoint.matches === true) {
		swiperHorizontal = new Swiper(
			"#testimonials-horizontal-swiper",
			configHorizontal
		);
		if (swiper1 !== undefined) swiper1.destroy(true, true);
		if (swiper2 !== undefined) swiper2.destroy(true, true);
		if (swiper3 !== undefined) swiper3.destroy(true, true);

		return;
	} else if (breakpoint.matches === false) {
		swiper1 = new Swiper("#testimonials-col-1", configVertical);
		swiper2 = new Swiper("#testimonials-col-2", configVertical);
		swiper3 = new Swiper("#testimonials-col-3", configVertical);
		if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
		return;
	}
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

}

export default swiperTestimonials;
