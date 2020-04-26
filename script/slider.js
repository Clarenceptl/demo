let slide = new Array("images/burger1.png", "images/mcflurry.png", "images/salade.png");
let slidetext = new Array("The Triple Cheddar & Double Beef", "Le McFlurry Oreo","Salade Italian Mozza");
var numero = 0;

function ChangeSlide1(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide1").src = slide[numero];
    document.getElementById("slidetext").innerHTML = slidetext[numero];
}
