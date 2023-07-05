// variáveis 
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1= document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");


//eventos
btnTry.addEventListener('click', togglescreen1);
btnReset.addEventListener('click', togglescreen2);

function togglescreen1() {
  numeroAleatorio = Math.floor(Math.random() * respostas.length)
  togglescreen2()
}


function togglescreen2() {
  toggleFirst()
}


function toggleFirst() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");


}