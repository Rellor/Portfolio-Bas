var slides1 = ['icon_1280x720.png' , 'mockup10.jpg' , 'mockup14.jpg' , 'mockup15.jpg' ];

var leftArrow1 = document.querySelector("#leftarrow1");
var rightArrow1 = document.querySelector("#rightarrow1");
var currentSlide1 = document.querySelector("#currentslide1");

var currentSlideNr1 = 1;

function nextSlide1() {

  var currentSlideImg1 = slides1[currentSlideNr1];
  var currentSlideLink1 = "assets/game_projects/flying halloween witch/" + currentSlideImg1;

  currentSlideNr1 = currentSlideNr1 +1;
  currentSlide1.src = currentSlideLink1;
  console.log(currentSlideNr1);

  if (currentSlideNr1 > 3) {
    currentSlideNr1 = 0;
  }

}

function lastSlide1() {

  var currentSlideImg1 = slides1[currentSlideNr1];
  var currentSlideLink1 = "assets/game_projects/flying halloween witch/" + currentSlideImg1;

  var currentSlideImg1 = slides1[currentSlideNr1];
  currentSlideNr1 = currentSlideNr1 -1;
  currentSlide1.src = currentSlideLink1;
  console.log(currentSlideNr1);

  if (currentSlideNr1 < 0) {
    currentSlideNr1 = 3;
  }
}

leftArrow1.addEventListener('click' , nextSlide1);
rightArrow1.addEventListener('click' , nextSlide1);
