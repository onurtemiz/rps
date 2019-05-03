
let cscore = 0;
let pscore = 0;
let roundNum = 5;

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

function resetGame(){
    pscore = 0;
    cscore = 0;
    const playerChoice = document.querySelector('#playerChoice');
    const computerc = document.querySelector('#computerChoice');
    const winnerDiv = document.querySelector('#winner');
    playerChoice,textContent = ''
    computerc.textContent = ''
    winnerDiv.textContent = ''
}


const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        let pchoice = button.innerText;
        let cchoice = computerChioce();
        playRound(cchoice,pchoice)
        const pscoreshow = document.querySelector('#pscore');
        pscoreshow.textContent = `Oyuncu Skoru: ${pscore}`;
        const cscoreshow = document.querySelector('#cscore');
        cscoreshow.textContent = `Bilgisayar Skoru: ${cscore}`;
        const playerChoice = document.querySelector('#playerChoice');
        playerChoice.textContent = `Oyuncunun Tercihi: ${pchoice}`;
        const computerc = document.querySelector('#computerChoice');
        computerc.textContent = `Bilgisayarin Tercihi: ${cchoice}`;
        if (cscore == roundNum) {
            pscoreshow.textContent = 'Bilgisayar Kazandi';
            cscoreshow.textContent = 'Bilgisayar Kazandi';
        }else if (pscore == roundNum) {
            pscoreshow.textContent = 'Oyuncu Kazandi';
            cscoreshow.textContent = 'Oyuncu Kazandi';
        }
        
    })

    button.addEventListener('mousedown', function(e){
        e.target.style.background = 'red';
    });
    button.addEventListener('mouseup', function(e){
        e.target.style.background = 'blue';
        
    });
    button.addEventListener('mouseup', (e) => {
        if (pscore == roundNum || cscore == roundNum){
            resetGame()
        }
    });
});




