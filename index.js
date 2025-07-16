const Target = document.querySelector('.target_display');
const Player1Name = document.querySelector('.player_1_name');
const Player2Name = document.querySelector('.player_2_name');
const display = document.querySelector('.score_display');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const newgame = document.querySelector('.new');
const Player1Total = document.querySelector('.player_1_total');
const Player1Current = document.querySelector('.player_1_current');
const Player2Current = document.querySelector('.player_2_current');
const Player2Total = document.querySelector('.player_2_total');
const Player1Box = document.querySelector('.player_1.player_box');
const Player2Box = document.querySelector('.player_2.player_box');
let Player1 = true;
let Winner = document.querySelector('.winner');
const SetTarget = Number(prompt('Enter your target'));
//const SetTarget = 10;
Target.innerText = SetTarget;
P1Name =prompt('Enter Player 1 name');
P2Name =prompt('Enter Player 2 name');
Player1Name.innerText = P1Name;
Player2Name.innerText = P2Name;
let high1=0;
let high2=0;
let sum = 0;


let gameActive = true;

roll.addEventListener('click',function (){
    if (!gameActive) return;
    let number = Math.floor(Math.random()*6+1);
    display.innerText = number;
    if(Player1 === true){
        if(number===1){
            sum =0;
            Player1Current.innerText = 0;
            Player1 = false;
        }else{
            sum+=number;
            Player1Current.innerText = sum;
        }
    }else{
        if(number===1){
            sum =0;
            Player2Current.innerText = 0;
            Player1 = true;
        }else{
            sum+=number;
            Player2Current.innerText = sum;
        }
    }
});

newgame.addEventListener('click', function startgame(){
    Player1Name.innerText = 'Player-1';
    Player2Name.innerText = 'Player-2';
    Target.innerText = 'Target';
    display.innerText = 'Score';
    sum = 0;
    high1 = 0;
    high2 = 0;
    Player1Current.innerText = 0;
    Player1Total.innerText = 0;
    Player2Total.innerText = 0;
    Player2Current.innerText = 0;
    gameActive = true;
    roll.disabled = false;
    hold.disabled = false;
    // Animate out winner
    Winner.classList.add('hide');
    Player1Box.classList.remove('winner-player');
    Player2Box.classList.remove('winner-player');
    setTimeout(() => {
        Winner.innerText = '';
        Winner.style.display = 'none';
        Winner.classList.remove('hide');
    }, 300);
});

hold.addEventListener('click', function (){
    if (!gameActive) return;
    display.innerText = 0;
    if(Player1 === true){
        high1 += sum;
        Player1Total.innerText = high1;
        Player1Current.innerText = 0;
        sum = 0;
        if(high1 >= SetTarget){
            Winner.style.display = "block";
            Winner.innerText = `${P1Name} Wins the game! `;
            Player1Box.classList.add('winner-player');
            gameActive = false;
            roll.disabled = true;
            hold.disabled = true;
            return;
        }
        Player1 = false;
    }else{
        high2 += sum;
        Player2Total.innerText = high2;
        Player2Current.innerText = 0;
        sum = 0;
        if(high2 >= SetTarget){
            Winner.style.display = "block";
            Winner.innerText = `${P2Name} Wins the game! `;
            Player2Box.classList.add('winner-player');
            gameActive = false;
            roll.disabled = true;
            hold.disabled = true;
            return;
        }
        Player1 = true;
    }
});