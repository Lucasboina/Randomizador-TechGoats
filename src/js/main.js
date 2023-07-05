const botaoRandomizar = document.getElementById("botao-randomizar"); 
const botaoResetar = document.getElementById("botao-resetar");
const mostraResultado = document.getElementById("mostra-resultado")
let num1;
let num2;
let num3;

botaoResetar.addEventListener('click', () => {
    mostraResultado.innerHTML = "";
})
botaoRandomizar.addEventListener('click', () => {
    pegaValores();
    num3 = getRandomInt(num1,num2);
    console.log(num3);
    mostraResultado.innerHTML = num3;
})

function pegaValores() {
    num1 = Number(document.getElementById("num-min").value);
    num2 = Number(document.getElementById("num-max").value);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
  }
  