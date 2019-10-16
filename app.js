//This is the code for the pig game

var scores, totalScores, currentPlayer, gamePlaying = true;
initialFunc();

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gamePlaying) {
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
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
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
      gamePlaying = false;

    } else {
      //next player
      nextPlayer();
    }
  }




});

function nextPlayer() {
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
  totalScores = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none'
}


document.querySelector('.btn-new').addEventListener('click', initialFunc);

function initialFunc() {
  scores = [0, 0];
  currentPlayer = 0;
  totalScores = 0;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.getElementById('name-0').classList.remove('winner');
  var elem = document.querySelector('#player-1-panel');
  if (elem) {
    elem.classList.remove('winner');
  }
  var elem1 = document.querySelector('player-0-panel');
  if (elem1) {
    elem1.classList.remove('active');
  };
  var elem2 = document.querySelector('player-1-panel');
  if (elem2) {
    elem2.classList.remove('active');
  }
  var elem3 = document.querySelector('player-0-panel');
  if (elem3) {
    elem3.classList.add('active');
  }
};
