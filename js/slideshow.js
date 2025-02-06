document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slideshow-container").forEach((slideshow) => {
        let currentSlide = 0;
        const slides = slideshow.querySelector(".slides");
        const totalSlides = slideshow.querySelectorAll(".slide").length;
        const leftArrow = slideshow.querySelector(".left-arrow");
        const rightArrow = slideshow.querySelector(".right-arrow");

        function changeSlide(direction) {
            currentSlide += direction;
            if (currentSlide >= totalSlides) currentSlide = 0;
            if (currentSlide < 0) currentSlide = totalSlides - 1;
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        leftArrow.addEventListener("click", () => changeSlide(-1));
        rightArrow.addEventListener("click", () => changeSlide(1));
    });
});
