{function playGame(playerInput){

	clearMessages();

	function getMoveName(argMoveId){
	  if(argMoveId == 1){
	    return 'kamień';
	  } else if(argMoveId == 2){
	  	return 'papier';
	  }else if (argMoveId == 3){
	  	return 'nożyce';
	  }

	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	const argComputerMove = getMoveName(randomNumber);

	/*if(randomNumber == 1){
	  computerMove = 'kamień';
	} else if(randomNumber == 2){
		computerMove = 'papier';
	} else if(randomNumber == 3){
		computerMove = 'nożyce';
	}*/

	//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

	console.log('Gracz wpisał: ' + playerInput);

	const argPlayerMove = getMoveName(playerInput);

	/*if(playerInput == '1'){
	  playerMove = 'kamień';
	} else if (playerInput == '2'){
		playerMove = 'papier';
	} else if (playerInput == '3'){
		playerMove = 'nożyce';
	}*/

	const displayResult = function (argComputerMove, argPlayerMove){
		printMessage('Zagrałem ' + argComputerMove + ', a ty ' + argPlayerMove);

		if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
			printMessage('Ty wygrywasz');
		} else if (argComputerMove == 'kamień' && argPlayerMove =='kamień'){
			printMessage('Remis');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
			printMessage('Remis');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
			printMessage('Remis');
		} else if (argComputerMove == 'kamień' && argPlayerMove =='nożyce'){
			printMessage('Wyrgywa komputer');
		} else if (argComputerMove =='papier' && argPlayerMove == 'kamień'){
			printMessage('Wygrywa komputer');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			printMessage('Ty wygrywasz');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
			printMessage('Wygrywa komputer');
		} else if (argComputerMove ='papier' && argPlayerMove == 'nożyce'){
			printMessage('Ty wygrywasz');
		}
	}
	displayResult(argComputerMove, argPlayerMove);
}
const playElementRock = document.getElementById('play-rock');
playElementRock.addEventListener('click', function(){playGame(1);});

const playElementPaper = document.getElementById('play-paper');
playElementPaper.addEventListener('click', function(){playGame(2);});

const playElementScissors = document.getElementById('play-scissors');
playElementScissors.addEventListener('click', function(){playGame(3);});

/*document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});*/

}