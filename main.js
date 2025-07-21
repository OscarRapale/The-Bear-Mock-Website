let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let imageSlides = document.getElementsByClassName("slides");
    for (i = 0; i < imageSlides.length; i++) {
        imageSlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > imageSlides.length) {slideIndex = 1}
    imageSlides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}
