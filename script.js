
let cscore = 0;
let pscore = 0;

function computerChioce () {  
    let options = ["Rock","Paper","Scissors"]

   return options[Math.floor(Math.random() * options.length)]
}

function playRound (c,p) {
    if (c == "Rock" && p == "Paper"){
        pscore++;
    }else if (c == "Rock" && p == "Scissors"){
        cscore++;
    }else if (c == "Paper" && p == "Rock"){
        cscore++;
    }else if (c == "Paper" && p == "Scissors"){
        pscore++;
    }else if (c == "Scissors" && p == "Rock"){
        pscore++;
    }else if (c == "Scissors" && p == "Paper"){
        cscore++;
    }
}

//function playerChoice () {
//    let answer = window.prompt("Rock, Paper, Scissors ?");
//    answer = answer.toLowerCase();
//    let choice = answer.charAt(0).toUpperCase() + answer.slice(1);
//    return choice
//}

function game (){

    for(let i = 0; i < 5; i++){
    playRound(computerChioce(),playerChoice());
    console.log(`Computer: ${cscore} Player: ${pscore}`)
    
    }
}

function resetGame(){
    pscore = 0;
    cscore = 0;
    const playerChoice = document.querySelector('#playerChoice');
    const computerc = document.querySelector('#computerChoice');
    playerChoice,textContent = ''
    computerc.textContent = ''
}


const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        let pchoice = button.innerText;
        let cchoice = computerChioce();
        console.log(pchoice)
        console.log(cchoice)
        playRound(cchoice,pchoice)
        const pscoreshow = document.querySelector('#pscore');
        pscoreshow.textContent = `Oyuncu Skoru: ${pscore}`;
        const cscoreshow = document.querySelector('#cscore');
        cscoreshow.textContent = `Bilgisayar Skoru: ${cscore}`;
        const playerChoice = document.querySelector('#playerChoice');
        playerChoice.textContent = `Oyuncunun Tercihi: ${pchoice}`;
        const computerc = document.querySelector('#computerChoice');
        computerc.textContent = `Bilgisayarin Tercihi: ${cchoice}`;
        
    })

    button.addEventListener('mousedown', function(e){
        e.target.style.background = 'red';
    });
    button.addEventListener('mouseleave', function(e){
        e.target.style.background = 'blue';
        
    });
    button.addEventListener('mouseup', (e) => {
        if (pscore == 5 || cscore == 5){
            resetGame()
        }
    });
});




