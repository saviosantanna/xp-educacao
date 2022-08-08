function start(){
    var buttonCalculateIMC = window.document.querySelector('#button-calculate-imc')
    buttonCalculateIMC.addEventListener('click', handleButtonClick);

    var inputHeigth = document.querySelector('#input-heigth');
    var inputWeigth = document.querySelector('#input-weigth');

    inputWeigth.addEventListener('input', handleButtonClick);
    inputHeigth.addEventListener('input', handleButtonClick);
    

    handleButtonClick();
}

function calcularIMC(weigth, heigth){
    return weigth/(heigth*heigth);
}

function handleButtonClick(){
    console.log('Clicou!');
    var inputHeigth = document.querySelector('#input-heigth');
    var inputWeigth = document.querySelector('#input-weigth');
    var imcResult =document.querySelector('#imc-result');
    
    var weigth = Number(inputWeigth.value);
    var heigth = Number(inputHeigth.value);

    var imc = calcularIMC(weigth, heigth)
    console.log(imc);
    var imc = imc.toFixed(2).replace('.',',')

    imcResult.textContent = imc;
}

start();