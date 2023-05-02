//Usando binary search, é possivel fazer o jogo.
//Clojures para isolar o código do window.

const mainArea = (() =>  {
    const getToFind = document.getElementById("numeroEscolhido");
    const getTries = document.querySelector("#tentativasRestantes");
    let chances = 5;
    let toFind = Math.floor(Math.random()* 100);

    const startGame = ()  =>  {
        toFind = Math.floor(Math.random()* 100);
    }
    const myGuess = () =>  {
        console.log(toFind)
        chances -= 1;
        const guess = document.querySelector("#EscAdivinhador").value
        if(chances <= 0){
            startGame();
            chances = 5;
            getTries.innerHTML = `tentativas: ${chances}`;
        }
        else if(guess == undefined || guess == "")  {
            getToFind.innerHTML = `Por favor, insira algo.`;
        }
        else if(guess == toFind){
            getToFind.innerHTML = `Você acertou! ${guess}!`;
            
        }
        else if(guess > toFind)    {
            getToFind.innerHTML = `Muito alto ${guess}`;
            getTries.innerHTML = `tentativa: ${chances}`
        }
        else if(guess < toFind)    {
            getToFind.innerHTML = `Muito baixo ${guess}`;
            getTries.innerHTML = `tentativa: ${chances}`;
        }
        else{
            getToFind.innerHTML = `Por favor, insira um numero!.`;
        }
    }
    const guessButton = document.querySelector("#BtnAdvinhador").addEventListener("click", myGuess);
})();