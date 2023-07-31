//Bas de Roller , Klas Roze.

var damage = 1;
var enemy1Health = 5000;

var money = 1;

var y = 0;
var x = 0;

var weapons = ['-','*-', '^--', '0---'];
var wapenNummer = 0;
var heads = ['o','0', 'D', '8'];
var torso = ['-O-','-|-', '-+-', '-I-'];
var feet = ['||','LL', 'ii', 'T'];

var headNumber = 0;
var torsoNumber = 0;
var feetNumber = 0;

//player body
var playerWeapon = document.querySelector("#playerweapon");
var playerHead = document.querySelector("#playerhead");
var playerTorso = document.querySelector("#playertorso");
var playerfeet = document.querySelector("#playerfeet");

//edit player body
var editPlayerMenu = document.querySelector("#editplayer");
var openEditBtn = document.querySelector("#openedit");
var closeEditBtn = document.querySelector("#closeedit");

//edit head
var lastHead = document.querySelector("#lasthead");
var nextHead = document.querySelector("#nexthead");

//edit torso
var lastTorso = document.querySelector("#lasttorso");
var nextTorso = document.querySelector("#nexttorso");

//edit feet
var lastFeet = document.querySelector("#lastfeet");
var nextFeet = document.querySelector("#nextfeet");

// game
var locatieText = document.querySelector("#locatie");
var textBox = document.querySelector("#textbox");
var styleLink = document.querySelector("#style");
var attackBtn = document.querySelector("#attackbtn");

//player bar
var closeBtn = document.querySelector("#close");
var moneyText = document.querySelector("#money");
var shopMenu = document.querySelector("#shop");
var openshopBtn = document.querySelector("#openshop");
var moneyDiv = document.querySelector("#moneydiv");

//wapens
var buySwordBtn = document.querySelector("#buysword");
var buyMaceBtn = document.querySelector("#buymace");
var buyScytheBtn = document.querySelector("#buyscythe");
var buyUltraMaceBtn = document.querySelector("#buyultramace");
var noMoney = document.querySelector("#nomoney");

//modes
var bitMode = document.querySelector("#bitmode");
var hackerMode = document.querySelector("#hackermode");
var barMode = document.querySelector("#barmode");

//game over
var youDied = document.querySelector("#youdied");

//filler
var filler = document.querySelector("#filler");

//map
var map = document.querySelector("#map");

function updateGame () {
    var playerlocation = "X " + x + " / " + "Y " +  y;
    console.log(playerlocation);
    locatieText.textContent = playerlocation;
}

// Attack
function doDamageTo1 () {

  if (enemy1Health <= 0) {
    textBox.textContent = "You won!";
    money = money + 1000;
    moneyText.textContent = money;
    enemy1Health = enemy1Health - 0;
    noAttack();
  }

  else if (enemy1Health >= 1) {
console.log(wapenNummer);

  if ( wapenNummer == 1 ) {
  console.log("Sword damge");
  damage = 5;
  }
  else if ( wapenNummer == 2 ) {
  console.log("Sword damge");
  damage = 50;
  }
  else if ( wapenNummer == 3 ) {
  console.log("Sword damge");
  damage = 100;
  }
  else if ( wapenNummer == 4 ) {
  console.log("Sword damge");
  damage = 250;
  }

  enemy1Health = enemy1Health - damage;
  textBox.textContent = "Enemy " + enemy1Health + "HP";
  }
}

// Attack button appears
function startAttack () {
  console.log("Attacked");
  attackBtn.classList.remove('hidden');
}

// Attack button dissappears
function noAttack () {
  console.log("Stopped attacking");
  attackBtn.classList.add('hidden');
}

function move () {

  var playerlocation = "X " + x + "/" + "Y " +  y;
  var key = event.key ;

//Movement
  if ( key =='d' || key =='D' || key == 'ArrowRight') {
  x = x + 1;
  }

  else if ( key =='a' || key =='A' || key == 'ArrowLeft') {
  x = x - 1;
  }

  else if ( key =='w' || key =='W' || key == 'ArrowUp') {
  y = y + 1;
  }

  else if ( key =='s' || key =='S' || key == 'ArrowDown') {
  y = y - 1;
  }

// Locaties
// Loot
if (
  x == 5 && y == 8 ||  x == 6 && y == 8 || x == 7 && y == 8 ||  x == 7 && y == 7 || x == 8 && y == 7 || x == 8 && y == 6 || x == 7 && y == 6 || x == 8 && y == 5
   || x == 0 && y == 6 || x == 6 && y == 2 || x == -6 && y == -2 || x == 4 && y == -4 || x == -6 && y == -7
  ) {
    textBox.textContent = "Loot!";

    money = money +1;

    moneyText.textContent = money;

    noAttack();
}
//Boss
else if ( x == -5 && y == 5 ) {
  startAttack();
  textBox.textContent = "Enemy " + enemy1Health + "HP";
}

else if ( x == 9 || x == -9 || y == 9 || y == -9) {
  textBox.textContent = "GO NO FURTHER OR FACE DEATH";
}
else if ( x == 10 || x == -10 || y == 10 || y == -10) {
  textBox.textContent = "You died.";
  youDied.classList.remove('hidden');
}

//Text events
//Event 1
else if ( x == -8 && y == 8  ) {
  textBox.textContent = "Did you really just walk all the way over here? Sho! Go do something.";
}
//Event 2
else if ( x == 0 && y == -1 || x == 0 && y == 1 || x == 1 && y == 0 || x == -1 && y == 0) {
  textBox.textContent = "Greetings, ashen one. Your path is steep but you'll manage. Grow in strength and slay Gundyr.";
}
//Event 3
else if ( x == 7 && y == -1 ) {
  textBox.textContent = "A map lies here, It tells you that treasure is hidden just a little up North";
}
//Event 4
else if ( x == -4 && y == -4 ) {
  textBox.textContent = "One of the deprived souls looks at you, shivers and says: Thy do not belong here.";
}
//Event 5
else if ( x == 2 && y == -7 ) {
  textBox.textContent = "You see a sign saying: Find the Bonfire and be who you want to be!";
}
//Event 6
else if ( x == -8 && y == -8 ) {
  textBox.textContent = "Dont EVER walk over the border.";
}

//Event 7
else if ( x == 8 && y == 8 ) {
  textBox.textContent = "Enjoy your riches! do you crave more? Press H. Come one, try it.";
}

//The merchant
else if ( x == 3 && y == 4  ) {
  textBox.textContent = "Ah, the merchant! Lets buy some gear.";
  openshopBtn.classList.remove('hidden');
  filler.classList.add('hidden');
}

//the Bonfire
else if ( x == 1 && y == -4  ) {
  textBox.textContent = "Lets rest at this bonfire.";
  openEditBtn.classList.remove('hidden');
  filler.classList.add('hidden');
}

else {
  textBox.textContent = "Nothing happens";
  filler.classList.remove('hidden');
  openEditBtn.classList.add('hidden');
  openshopBtn.classList.add('hidden');
  noAttack();
}


  updateGame();
}


// Font mode
function hackermode () {
  style.href = 'style/hackerstyle.css';
  console.log("hackermode");
}
function barmode () {
  style.href = 'style/barmodestyle.css';
  console.log("barmode");
}
function bitmode () {
  style.href = 'style/style.css';
  console.log("bitmode");
}


//shop functions
function closeShop () {
  shopMenu.classList.add('hidden');
  shopMenu.classList.remove('displayblock');
  console.log("closed shop")
}

function openShop () {
  shopMenu.classList.add('displayblock');
  shopMenu.classList.remove('hidden');
  console.log("Opened shop")
}
//Buy weapons
function buySword () {
  if (money >= 10 ) {
    money = money - 10;
    moneyText.textContent = money;
    console.log("GEKOCHT");
    playerWeapon.textContent = weapons['0'];
    wapenNummer = 1;
    buySwordBtn.classList.add('hidden');
    shopMenu.classList.add('hidden');
    shopMenu.classList.remove('displayblock');
  }
  else {
    console.log("no money");
    noMoney.classList.remove('hidden')
  }
}

function buyMace () {
  if (money >= 50 ) {
    console.log("GEKOCHT");
    money = money - 50;
    moneyText.textContent = money;
    playerWeapon.textContent = weapons['1'];
    wapenNummer = 2;
    buyMaceBtn.classList.add('hidden');
    shopMenu.classList.add('hidden');
    shopMenu.classList.remove('displayblock');
  }
  else {
    console.log("no money");
    noMoney.classList.remove('hidden')
  }
}

function buyScythe () {
  if (money >= 200 ) {
    console.log("GEKOCHT");
    money = money - 200;
    moneyText.textContent = money;
    playerWeapon.textContent = weapons['2'];
    wapenNummer = 3;
    buyScytheBtn.classList.add('hidden');
    shopMenu.classList.add('hidden');
    shopMenu.classList.remove('displayblock');
  }
  else {
    console.log("no money");
    noMoney.classList.remove('hidden')
  }
}

function buyUltraMace () {
  if (money >= 500 ) {
    console.log("GEKOCHT");
    money = money - 500;
    moneyText.textContent = money;
    playerWeapon.textContent = weapons['3'];
    wapenNummer = 4;
    buyUltraMaceBtn.classList.add('hidden');
    shopMenu.classList.add('hidden');
    shopMenu.classList.remove('displayblock');
  }
  else {
    console.log("no money");
    noMoney.classList.remove('hidden')
  }
}

//edit player
function openEdit () {
  openEditBtn.classList.add('stayandhidden');
  openEditBtn.classList.remove('displayblock');
  openshopBtn.classList.add('stayandhidden');
  openshopBtn.classList.remove('displayblock');
  editPlayerMenu.classList.add('displayblock');
  editPlayerMenu.classList.remove('hidden');
  moneyDiv.classList.add('stayandhidden');
  moneyDiv.classList.remove('displayblock');
  console.log("Opended editor");
}

function closeEdit() {
  openEditBtn.classList.add('displayblock');
  openEditBtn.classList.remove('stayandhidden');
  openshopBtn.classList.add('displayblock');
  openshopBtn.classList.remove('stayandhidden');
  editPlayerMenu.classList.add('hidden');
  editPlayerMenu.classList.remove('displayblock');
  moneyDiv.classList.remove('stayandhidden');
  console.log("Closed Editor");
}

//Edit player
function bodyPicker() {
  playerHead.textContent = heads[headNumber];
  console.log(headNumber);
  playerTorso.textContent = torso[torsoNumber];
  console.log(torsoNumber);
  playerfeet.textContent = feet[feetNumber];
  console.log(feetNumber);
}

//pick head
function pickNextHead() {
  headNumber = headNumber + 1 ;
  if ( headNumber > heads.length -1 ) { // voorbij het einde
    headNumber = 0 ; // terug naar begin
  }
  bodyPicker()
}

function pickPrevHead() {
  headNumber = headNumber - 1 ;
  if ( headNumber < 1 ) { // voorbij het einde
    headNumber = heads.length -1 ; // terug naar begin
  }
  bodyPicker()
}

//pick torso
function pickNextTorso() {
  torsoNumber = torsoNumber + 1 ;
  if ( torsoNumber > torso.length -1 ) { // voorbij het einde
    torsoNumber = 0 ; // terug naar begin
  }
  bodyPicker();
}

function pickPrevTorso() {
  torsoNumber = torsoNumber - 1 ;
  if ( torsoNumber < 1 ) { // voorbij het einde
    torsoNumber = torso.length -1 ; // terug naar begin
  }
  bodyPicker();
}

//pick feet
function pickNextFeet() {
  feetNumber = feetNumber + 1 ;
  if ( feetNumber > feet.length -1 ) { // voorbij het einde
    feetNumber = 0 ; // terug naar begin
  }
  bodyPicker();
}

function pickPrevFeet() {
  feetNumber = feetNumber - 1 ;
  if ( feetNumber < 1 ) { // voorbij het einde
    feetNumber = feet.length -1 ; // terug naar begin
  }
  bodyPicker();
}

//money hack
function makeMoney () {
  var  key = event.key ;

  if ( key =='h' || key =='H') {
   money = money +10;
   moneyText.textContent = money;
  }
}

function openMap () {
  var  key = event.key ;

  if ( key =='m' || key =='M') {
   map.classList.remove('hidden');
   console.log("open map");
  }
}

function closeMap() {
  map.classList.add('hidden');
  console.log("Closed map");
}

// Events
document.addEventListener('keypress' , move);
document.addEventListener('keypress' , makeMoney);
document.addEventListener('keypress' , openMap);

bitMode.addEventListener('click' , bitmode);
hackerMode.addEventListener('click' , hackermode);
barMode.addEventListener('click' , barmode);

attackBtn.addEventListener('click' , doDamageTo1);
closeBtn.addEventListener('click' , closeShop);

openshopBtn.addEventListener('click' , openShop);
buySwordBtn.addEventListener('click' , buySword);
buyMaceBtn.addEventListener('click' , buyMace);
buyScytheBtn.addEventListener('click' , buyScythe);
buyUltraMaceBtn.addEventListener('click' , buyUltraMace);

openEditBtn.addEventListener('click' , openEdit);
closeEditBtn.addEventListener('click' , closeEdit);

nextHead.addEventListener('click' , pickNextHead);
lastHead.addEventListener('click' , pickPrevHead);
nextTorso.addEventListener('click' , pickNextTorso);
lastTorso.addEventListener('click' , pickPrevTorso);
nextFeet.addEventListener('click' , pickNextFeet);
lastFeet.addEventListener('click' , pickPrevFeet);

map.addEventListener('click' , closeMap);
