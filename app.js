//This is the code for the pig game

var scores, totalScores, currentPlayer;
initialFunc();

document.querySelector('.btn-roll').addEventListener('click', function () {
  //Generate random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //display the results
  var diceStored = document.querySelector('.dice')
  diceStored.style.display = 'block';
  diceStored.src = './images/dice-' + dice + '.png';

  //update the round score if the rolled number was not a 1
  if (dice !== 1) {
    totalScores += dice;
    document.querySelector('#current-' + currentPlayer).textContent = totalScores;

  } else {
    nextPlayer();
  }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
  //add current score to global score
  scores[currentPlayer] += totalScores;

  //update the ui
  document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];

  //check if player won the game
  if (scores[currentPlayer] >= 20) {
    document.querySelector('#name-' + currentPlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');

  } else {
    //next player
    nextPlayer();
  }
});
