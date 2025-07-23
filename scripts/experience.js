// automatic slideshow

let slideIndex = 0;
experienceCarousel();

function experienceCarousel() {
  let i;
  let imageSlides = document.getElementsByClassName("slides");
  for (i = 0; i < imageSlides.length; i++) {
    imageSlides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > imageSlides.length) {
    slideIndex = 1;
  }
  imageSlides[slideIndex - 1].style.display = "block";
  setTimeout(experienceCarousel, 4000);
}
