// Events manual slideshow

let eventIndex = 1;
eventsCarousel(eventIndex);

function plusImages(image) {
  eventsCarousel(eventIndex += image);
}

function eventsCarousel(index) {
  let i;
  let eventSlides = document.getElementsByClassName("event-slides");
  if (index > eventSlides.length) {
    eventIndex = 1;
  }
  if (index < 1) {
    eventIndex = eventSlides.length;
  }
  for (i = 0; i < eventSlides.length; i++) {
    eventSlides[i].style.display = "none";
  }
  eventSlides[eventIndex - 1].style.display = "block";
}
