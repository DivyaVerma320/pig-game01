/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activeplayer, gamePLaying;

init();

document.querySelector('.btn-roll').addEventListener('click' , function(){
     if(gamePLaying){

    //Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //Update the round score If the rolled number was NOt a 1
    if (dice !== 1){
        //add score
        roundScores += dice;
        document.querySelector('#current-' + activeplayer).textContent = roundScores;
    }else{
        //next player
        nextPlayer();
    }
     }
   
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePLaying){
    
    //Add CURRENT score to Global score
    scores[activeplayer] += roundScores;

    //Update the UI(user interface)
    document.querySelector('#score-'+ activeplayer).textContent =scores[activeplayer];

    //Check if player won the game
    if(scores[activeplayer] >= 50){
        document.querySelector('#name-' + activeplayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
        gamePLaying = false;
    }else{
        nextPlayer();
    }
    }
    
})
function nextPlayer(){
 //next player
 activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 ;
 roundScores = 0;

 document.getElementById('current-0').textContent = 0;
 document.getElementById('current-1').textContent = 0;
 
 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');

// document.querySelector('.player-0-panel').classList.remove('active');
// document.querySelector('.player-1-panel').classList.add('active');

document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScores = 0;
    activeplayer = 0; 
    gamePLaying = true; 

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}





//document.querySelector('#current-' + activeplayer).innerHTML ='<em>'+dice+'</em>'

//var x = document.querySelector('#score-0').textContent;
//console.log(x);