var state = { board:[], currentGame:[], savedGames:[]};

function start(){
    createBoard();
    NewGame();
    render();
}

function render(){
    renderBoard();
}

function renderBoard(){
    var divBoard = document.querySelector('#megasena-board');
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');

    for (var i=0; i<state.board.length; i++){
        var currentNumber = state.board[i];

        var liNumber = document.createElement('li')
        liNumber.textContent = currentNumber;

        ulNumbers.appendChild(liNumber);
    }

    divBoard.appendChild(ulNumbers);
}

function NewGame(){
    resetGame();
    render();
}

function createBoard(){
    state.board = [];
    for (var i=1; i<=60; i++){
        state.board.push(i);
    }
}

function addNumberToGame(numberToAdd){
    if(numberToAdd<1 || numberToAdd >60){
        console.error(`Número inválido, ${numberToAdd}`);
        return;
    }

    if(state.currentGame.length>=6){
        console.error(`O jogo já está completo!`)
        return;
    }

    if (isNumberInGame(numberToAdd)){
        console.error(`Este número já está no jogo: ${numberToAdd}`)
        return;
    }

    
    state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberRemove){
    if(numberRemove<1 || numberRemove >60){
        console.error(`Número inválido, ${numberRemove}`);
        return;
    }
    
    var newGame = [];
    for (var i = 0; i<state.currentGame.length; i++){
        var currentNumber = state.currentGame[i];
        if(currentNumber === numberRemove){
            continue;
        }

        newGame.push(currentNumber);
    }
    state.currentGame = newGame;
}

function isNumberInGame (numbercheck){
    return state.currentGame.includes(numbercheck);
}

function saveGame(){
    if(!isGameComplete()){
        console.error('O jogo não está completo.');
        return;
    }
    state.savedGames.push(state.currentGame)
}

function isGameComplete(){
    return state.currentGame.length ===6;
}

function resetGame(){
    state.currentGame =[];
}

start();