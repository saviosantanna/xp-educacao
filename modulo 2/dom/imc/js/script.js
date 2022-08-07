function start(){
    var buttonCalculateIMC = window.document.querySelector('#button-calculate-imc')
    buttonCalculateIMC.addEventListener('click', handleButtonClick);
}

function calcularIMC(weigth, heigth){
    return weigth/(heigth*heigth);
}

function handleButtonClick(){
    console.log('Clicou!');
}

start();