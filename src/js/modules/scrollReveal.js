import ScrollReveal from "scrollreveal";

function scrollRevealFunc() {
ScrollReveal({
	distance: "60px",
	duration: 2800,
});

ScrollReveal().reveal(`.header, .partners, .popular__title`, {
	origin: "top",
});

ScrollReveal().reveal(`.discover-picture__hint, .discover__title`, {
	origin: "left",
});

ScrollReveal().reveal(
	`.discover__text, .discover-picture__scrool, .popular__controls`,
	{
		origin: "right",
	}
);

ScrollReveal().reveal(`.discover__form, .discover__picture-scroll`, {
	origin: "bottom",
});
}

export default scrollRevealFunc;


