var slides2 = ['title.jpg' , 'ingame_playing.jpg' , 'pause.jpg' , 'icon_1280x720.jpg' ];

var leftArrow2 = document.querySelector("#leftarrow2");
var rightArrow2 = document.querySelector("#rightarrow2");
var currentSlide2 = document.querySelector("#currentslide2");

var currentSlideNr2 = 1;

function nextSlide2() {

    var currentSlideImg2 = slides2[currentSlideNr2];
    var currentSlideLink2 = "assets/game_projects/halloween majong connect/" + currentSlideImg2;
    currentSlideNr2 = currentSlideNr2 +1;
    currentSlide2.src = currentSlideLink2;
    console.log(currentSlideNr2);

    if (currentSlideNr2 > 3) {
      currentSlideNr2 = 0;
    }

}

function lastSlide2() {

    var currentSlideImg2 = slides2[currentSlideNr2];
    var currentSlideLink2 = "assets/game_projects/halloween majong connect/" + currentSlideImg2;
    currentSlideNr2 = currentSlideNr2 -1;
    currentSlide2.src = currentSlideLink2;
    console.log(currentSlideNr2);

    if (currentSlideNr2 < 0) {
      currentSlideNr2 = 3;
    }
}

leftArrow2.addEventListener('click' , nextSlide2);
rightArrow2.addEventListener('click' , nextSlide2);
