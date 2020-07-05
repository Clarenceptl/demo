<<<<<<< HEAD
// let slide = new Array("images/burger1.png", "images/mcflurry.png", "images/salade.png");
let slidetext = new Array("The Triple Cheddar & Double Beef", "Le McFlurry Oreo","Salade Italian Mozza");
var numero = 0;

ChangeSlide1 = (sens) => {
    numero = numero + sens;
    if (numero < 0)
        numero = slidetext.length - 1;
    if (numero > slidetext.length - 1)
        numero = 0;
    // document.getElementById("slide1").src = slide[numero];
    document.getElementById("slidetext").innerHTML = slidetext[numero];
}

let carousel = document.querySelector('.carousel');
let cellCount = 3;
let selectedIndex = 0;

rotateCarousel = () =>{
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-130px) rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', ()=> {
  selectedIndex--;
  rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', () => {
  selectedIndex++;
  rotateCarousel();
});


let buttonBurger = document.querySelector('li.burger'); 
let buttonBoite = document.querySelector('li.boite');
let buttonWraps = document.querySelector('li.wraps');
let buttonDesserts = document.querySelector('li.desserts');

let presentationBurger = document.querySelector('.presentation.burger');
let presentationBoite = document.querySelector('.presentation.boite');
let presentationWraps = document.querySelector('.presentation.wraps');
let presentationDesserts = document.querySelector('.presentation.desserts');

buttonBurger.addEventListener('click', () =>  {
  presentationBurger.style.display = "block";
  presentationBoite.style.display = "none";
  presentationWraps.style.display = "none";
  presentationDesserts.style.display = "none";
});
buttonBoite.addEventListener('click', () =>  {
  presentationBoite.style.display = "block";
  presentationBurger.style.display = "none";
  presentationWraps.style.display = "none";
  presentationDesserts.style.display = "none";
});buttonWraps.addEventListener('click', () =>  {
  presentationWraps.style.display = "block";
  presentationBoite.style.display = "none";
  presentationBurger.style.display = "none";
  presentationDesserts.style.display = "none";
});buttonDesserts.addEventListener('click', () =>  {
  presentationDesserts.style.display = "block";
  presentationBoite.style.display = "none";
  presentationBurger.style.display = "none";
  presentationWraps.style.display = "none";

=======
// let slide = new Array("images/burger1.png", "images/mcflurry.png", "images/salade.png");
let slidetext = new Array("The Triple Cheddar & Double Beef", "Le McFlurry Oreo","Salade Italian Mozza");
var numero = 0;

ChangeSlide1 = (sens) => {
    numero = numero + sens;
    if (numero < 0)
        numero = slidetext.length - 1;
    if (numero > slidetext.length - 1)
        numero = 0;
    // document.getElementById("slide1").src = slide[numero];
    document.getElementById("slidetext").innerHTML = slidetext[numero];
}

let carousel = document.querySelector('.carousel');
let cellCount = 3;
let selectedIndex = 0;

rotateCarousel = () =>{
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-130px) rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', ()=> {
  selectedIndex--;
  rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', () => {
  selectedIndex++;
  rotateCarousel();
});


let buttonBurger = document.querySelector('li.burger'); 
let buttonBoite = document.querySelector('li.boite');
let buttonWraps = document.querySelector('li.wraps');
let buttonDesserts = document.querySelector('li.desserts');

let presentationBurger = document.querySelector('.presentation.burger');
let presentationBoite = document.querySelector('.presentation.boite');
let presentationWraps = document.querySelector('.presentation.wraps');
let presentationDesserts = document.querySelector('.presentation.desserts');

buttonBurger.addEventListener('click', () =>  {
  presentationBurger.style.display = "block";
  presentationBoite.style.display = "none";
  presentationWraps.style.display = "none";
  presentationDesserts.style.display = "none";
});
buttonBoite.addEventListener('click', () =>  {
  presentationBoite.style.display = "block";
  presentationBurger.style.display = "none";
  presentationWraps.style.display = "none";
  presentationDesserts.style.display = "none";
});buttonWraps.addEventListener('click', () =>  {
  presentationWraps.style.display = "block";
  presentationBoite.style.display = "none";
  presentationBurger.style.display = "none";
  presentationDesserts.style.display = "none";
});buttonDesserts.addEventListener('click', () =>  {
  presentationDesserts.style.display = "block";
  presentationBoite.style.display = "none";
  presentationBurger.style.display = "none";
  presentationWraps.style.display = "none";

>>>>>>> 0edd28bb3c927a700bdaac18ea7c299319890c52
});