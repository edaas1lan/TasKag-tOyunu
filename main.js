const playerTurn=document.getElementById('playerTurn');
const playerScore=document.getElementById('score');

const playerRock=document.getElementById('rock');
const playerPaper=document.getElementById('paper');
const playerScissors=document.getElementById('makas');

const playerComputer=document.getElementById('playerComputer');
const scoreComputer=document.getElementById('scoreComputer');

const Computerrock=document.getElementById('Computerrock');
const Computerpaper=document.getElementById('Computerpaper');
const Computermakas=document.getElementById('Computermakas');

const resultText=document.getElementById('resultText');



const allIcons=document.querySelectorAll('.icon');
const choices={
    rock:{name:'Rock',win:['scissors']},
    paper:{name:'Paper',win:['rock']},
    scissors:{name:'Scissors',win:['paper']},
}

let playerScoreNumber=0;
let computerScoreNumber=0;

let computerChoice='';



function resetSelected(){
    allIcons.forEach((icon)=>{
        icon.classList.remove('selected');
        stopConfetti();
        removeConfetti();
    });
}

function computerRandomChoice(){
    const computerChoiceNumber=Math.random();
    if(computerChoiceNumber<0.3){
        computerChoice='rock';
    }
    else if(computerChoiceNumber<=0.65){
        computerChoice='paper';
    }
    else if(computerChoiceNumber<=1){
        computerChoice='scissors';
    }
}
function displayComputerChoice(){
   switch(computerChoice){
    case 'rock':
        Computerrock.classList.add('selected');
        playerComputer.textContent=' -Taş';
        break;
    case 'paper':
        Computerpaper.classList.add('selected');
        playerComputer.textContent=' -Kağıt';
        break;
    case 'scissors':
        Computermakas.classList.add('selected');
        playerComputer.textContent=' -Makas';
        break;
   }
}

function resetAll(){
    playerScoreNumber=0;
    computerScoreNumber=0;
    playerScore.textContent=playerScoreNumber;
    scoreComputer.textContent=computerScoreNumber;
    playerTurn.textContent='';
    playerComputer.textContent='';
    resultText.textContent='';
    resetSelected(); 
}


function updateScore(playerSecim){
    if(playerSecim===computerChoice){
        resultText.textContent='Berabere';
    }
    else{
        const choice=choices[playerSecim];
        if(choice.win.indexOf(computerChoice)===0)
        {
            playerScoreNumber++;
            resultText.textContent='Eda Arslan Kazandı!!';
            playerScore.textContent=playerScoreNumber;
            startConfetti();
        }
        else{
            computerScoreNumber++;
            resultText.textContent='Bilgisayar Kazandı!!';
            scoreComputer.textContent=computerScoreNumber;
        }
    }
}
function checkResult(playerSecim){
    resetSelected();    
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerSecim);
}

function select(playerSecim){
    checkResult(playerSecim);

   switch(playerSecim){
    case 'rock':
        playerRock.classList.add('selected');
        playerTurn.textContent=' -Taş';
        break;
    case 'paper':
        playerPaper.classList.add('selected');
        playerTurn.textContent=' -Kağıt';
        break;
    case 'scissors':
        playerScissors.classList.add('selected');
        playerTurn.textContent=' -Makas';
        break;
   }
}

