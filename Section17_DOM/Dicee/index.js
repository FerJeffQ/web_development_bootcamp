let diceOne = document.getElementsByClassName("img1")[0];
let diceTwo = document.getElementsByClassName("img2")[0];
let winner = document.querySelector("h1");


let numberRandomOne = Math.round(Math.random()*5 + 1);
let numberRandomTwo = Math.round(Math.random()*5 + 1);

diceOne.src = `/images/dice${numberRandomOne}.png`;
diceTwo.src = `/images/dice${numberRandomTwo}.png`;


if (numberRandomOne > numberRandomTwo){
    winner.textContent = "Player 1 Wins 🚩";
}else if(numberRandomOne < numberRandomTwo){
    winner.textContent = "Player 2 Wins 🚩";
}else{
    winner.textContent = "Draw 🚩";
}

