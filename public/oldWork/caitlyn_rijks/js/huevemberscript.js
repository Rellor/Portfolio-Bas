var huevemberText =
['November 1st' , 'November 2nd  ' , 'November 3rd ' , 'November 4th ' , 'November 5th ' , 'November 6th ' , 'November 7th ' ,
'November 8th' , 'November 9th ' , 'November 10th ' , 'November 11th ' , 'November 12th ' , 'November 13th ' , 'November 14th ' ,
'November 15th' , 'November 16th ' , 'November 17th ' , 'November 18th ' , 'November 19th ' , 'November 20th ' , 'November 21st ' ,
'November 22nd ' , 'November 23rd ' , 'November 24th ' , 'November 25th ' , 'November 26th ' , 'November 27th ' , 'November 28th <br>' ,
'November 29th ' , 'November 30th ' ,];

var img2TextFirst = document.querySelector("#img2textfirst")
var img2TextMiddle = document.querySelector("#img2textmiddle")
var img2TextLast = document.querySelector("#img2textlast")

var slide2ArrowLeft = document.querySelector("#slide2arrowleft")
var slide2ArrowRight = document.querySelector("#slide2arrowright")

var slide2Img = document.querySelector("#slide2img");
var slide2ImgFirst = document.querySelector("#slide2imgFirst");
var slide2ImgLast = document.querySelector("#slide2imgLast");

var slide2ImgNr = 2;

var slide2imgFirstNr = 1;

function showSlide2() {

  var slide2ImgNrFirst = slide2ImgNr -1;
  var slide2ImgNrLast = slide2ImgNr +1;

  var huevemberTextNr = slide2ImgNr -1;
  var huevemberTextNrFirst = huevemberTextNr -1;
  var huevemberTextNrlast = huevemberTextNr +1;

  var huevemberTextBox = huevemberText[huevemberTextNr]
  var huevemberTextBoxFirst = huevemberText[huevemberTextNrFirst]
  var huevemberTextBoxLast = huevemberText[huevemberTextNrlast]

  var slide2ImageLink = "assets/huevember_sheet_square/day" + slide2ImgNr + ".png";
  var slide2ImageLinkFirst = "assets/huevember_sheet_square/day" + slide2ImgNrFirst + ".png";
  var slide2ImageLinkLast = "assets/huevember_sheet_square/day" + slide2ImgNrLast + ".png";

  slide2ImgFirst.src = slide2ImageLinkFirst;
  slide2Img.src = slide2ImageLink;
  slide2ImgLast.src = slide2ImageLinkLast;

  img2TextMiddle.innerHTML = huevemberTextBox;
  img2TextFirst.innerHTML = huevemberTextBoxFirst;
  img2TextLast.innerHTML = huevemberTextBoxLast;

  console.log("Clicked right arrow");
  console.log(slide2ImgNrFirst);
  console.log(slide2ImgNr);
  console.log(slide2ImgNrLast);

  console.log(slide2ImageLinkFirst);
  console.log(slide2ImageLink);
  console.log(slide2ImageLinkLast);

  console.log(huevemberText['0']);
  console.log(huevemberTextNr);
  console.log(huevemberTextBox);

}

function nextSlide2() {
  if (slide2ImgNr >= 29) {
    slide2ImgNr = 2;
  }
  else {
    slide2ImgNr = slide2ImgNr + 3;
    slide2imgFirstNr = slide2imgFirstNr +1;

  }

  showSlide2();
}

function lastSlide2() {
  if (slide2ImgNr <= 2) {
    slide2ImgNr = 29;
  }

  else {
    slide2ImgNr = slide2ImgNr - 3;
    slide2imgFirstNr = slide2imgFirstNr - 1;
  }

  showSlide2();
}

slide2ArrowRight.addEventListener('click' , nextSlide2);
slide2ArrowLeft.addEventListener('click' , lastSlide2);
