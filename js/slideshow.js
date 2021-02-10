/* slideshow manual
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/

/*Slidesshow autom[atico]
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides ");
    for (i = 0; i < x.length; i++) {
       x[i].style.display =  "none ";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display =  "block ";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}*/
var slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

  var index = 0, time = 1000;
  slides[index].classList.add('active');

  setInterval( () => {
    slides[index].classList.remove('active');

    //Go over each slide incrementing the index
    index++;

    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0;

    slides[index].classList.add('active');

  }, time);
}
