var inktoberText =
['October 1st <br> RING' , 'October 2nd  <br> MINDLESS' , 'October 3rd <br> BAIT' , 'October 4th <br> FREEZE' , 'October 5th <br> BUILD' , 'October 6th <br> HUSKY' , 'October 7th <br> ENCHANTED' ,
'October 8th <br> FRAIL' , 'October 9th <br> SWING' , 'October 10th <br> PATTERN' , 'October 11th <br> SNOW' , 'October 12th <br> DRAGON' , 'October 13th <br> ASH' , 'October 14th <br> OVERGROWN' ,
'October 15th <br> LEGEND' , 'October 16th <br> WILD' , 'October 17th <br> ORNAMENT' , 'October 18th <br> MISFIT' , 'October 19th <br> SLING' , 'October 20th <br> TREAD' , 'October 21st <br> TRESURE' ,
'October 22nd <br> GHOST' , 'October 23rd <br> ANCIENT' , 'October 24th <br> DIZZY' , 'October 25th <br> TASTY' , 'October 26th <br> DARK' , 'October 27th <br> COAT' , 'October 28th <br> RIDE' ,
'October 29th <br> INJURED' , 'October 30th <br> CATCH' , 'October 31st <br> RIPE'];

var img1TextFirst = document.querySelector("#img1textfirst")
var img1TextMiddle = document.querySelector("#img1textmiddle")
var img1TextLast = document.querySelector("#img1textlast")

var slide1ArrowLeft = document.querySelector("#slide1arrowleft")
var slide1ArrowRight = document.querySelector("#slide1arrowright")

var slide1Img = document.querySelector("#slide1img");
var slide1ImgFirst = document.querySelector("#slide1imgFirst");
var slide1ImgLast = document.querySelector("#slide1imgLast");

var slide1ImgNr = 2;

var slide1imgFirstNr = 1;

function showSlide1() {

  var slide1ImgNrFirst = slide1ImgNr -1;
  var slide1ImgNrLast = slide1ImgNr +1;

  var inktoberTextNr = slide1ImgNr -1;
  var inktoberTextNrFirst = inktoberTextNr -1;
  var inktoberTextNrlast = inktoberTextNr +1;

  var inktoberTextBox = inktoberText[inktoberTextNr]
  var inktoberTextBoxFirst = inktoberText[inktoberTextNrFirst]
  var inktoberTextBoxLast = inktoberText[inktoberTextNrlast]

  var animationNumber = 1;

  var slide1ImageLink = "assets/inktober_sheet_square/day" + slide1ImgNr + ".png";
  var slide1ImageLinkFirst = "assets/inktober_sheet_square/day" + slide1ImgNrFirst + ".png";
  var slide1ImageLinkLast = "assets/inktober_sheet_square/day" + slide1ImgNrLast + ".png";

  slide1ImgFirst.src = slide1ImageLinkFirst;
  slide1Img.src = slide1ImageLink;
  slide1ImgLast.src = slide1ImageLinkLast;

  img1TextMiddle.innerHTML = inktoberTextBox;
  img1TextFirst.innerHTML = inktoberTextBoxFirst;
  img1TextLast.innerHTML = inktoberTextBoxLast;

  console.log("Clicked right arrow");
  console.log(slide1ImgNrFirst);
  console.log(slide1ImgNr);
  console.log(slide1ImgNrLast);

  console.log(slide1ImageLinkFirst);
  console.log(slide1ImageLink);
  console.log(slide1ImageLinkLast);

  console.log(inktoberText['0']);
  console.log(inktoberTextNr);
  console.log(inktoberTextBox);

}

function nextSlide1() {
  if (slide1ImgNr >= 29) {
    slide1ImgNr = 2;
  }
  else {
    slide1ImgNr = slide1ImgNr + 3;
    slide1imgFirstNr = slide1imgFirstNr +1;

  }

  showSlide1();
}

function lastSlide1() {
  if (slide1ImgNr <= 2) {
    slide1ImgNr = 30;
  }

  else {
    slide1ImgNr = slide1ImgNr - 3;
    slide1imgFirstNr = slide1imgFirstNr - 1;
  }

  showSlide1();
}

slide1ArrowRight.addEventListener('click' , nextSlide1);
slide1ArrowLeft.addEventListener('click' , lastSlide1);
