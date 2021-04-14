let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * Функция перелистывания
 *
 * @param {number} n Номер слайда
 **/
function showSlides(n) {
    let slides = document.querySelectorAll(".slider-item");
    slideIndex = Math.abs(n) % slides.length;
  
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex].style.display = "block";    
}