var slides3 = ['blockz_logo.gif' , 'blockz_01.png' , 'blockz_02.png' , 'blockz_03.png' ];

var leftArrow3 = document.querySelector("#leftarrow3");
var rightArrow3 = document.querySelector("#rightarrow3");
var currentSlide3 = document.querySelector("#currentslide3");

var currentSlideNr3 = 1;

function nextSlide3() {

    var currentSlideImg3 = slides3[currentSlideNr3];
    var currentSlideLink3 = "assets/game_projects/blockz/" + currentSlideImg3;
    currentSlideNr3 = currentSlideNr3 +1;
    currentSlide3.src = currentSlideLink3;
    console.log(currentSlideNr3);

    if (currentSlideNr3 > 3) {
      currentSlideNr3 = 0;
    }

}

function lastSlide3() {

    var currentSlideImg3 = slides3[currentSlideNr3];
    var currentSlideLink3 = "assets/game_projects/blockz/" + currentSlideImg3;
    currentSlideNr3 = currentSlideNr3 -1;
    currentSlide3.src = currentSlideLink3;
    console.log(currentSlideNr3);

    if (currentSlideNr3 < 0) {
      currentSlideNr3 = 3;
    }
}

leftArrow3.addEventListener('click' , nextSlide3);
rightArrow3.addEventListener('click' , nextSlide3);
