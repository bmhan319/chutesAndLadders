let gameBoard = document.querySelector('.gameBoard')

//Create Game Board
function createBoard() {
  
  //making the rows
  for (var i = 10; i >= 1; i-- ) {
    let row = document.createElement('div')
    row.classList.add('row', `row${i}`)

    //making the columns
    for (var j = 10; j > 0; j--) {
      let square = document.createElement('div')
      let number = document.createElement('h3')
      let boxNumber = (i*10) + j - 10

      square.classList.add('square', `square${boxNumber}`)
      number.classList.add('number', `number${boxNumber}`)
      number.innerHTML = boxNumber

      square.appendChild(number)
      row.appendChild(square)
    }
    gameBoard.appendChild(row)
  }

  //make ladder
  for (var i = 1; i < 10; i++) {
    let ladder = document.createElement('div')
    ladder.classList.add('ladder', `ladder${i}`)
    gameBoard.appendChild(ladder) 
  }

  //make chutes
  for (var i = 1; i < 11; i++) {
    let chutes = document.createElement('div')
    chutes.classList.add('chute', `chute${i}`)
    gameBoard.appendChild(chutes) 
  }

  //add players
  pickPlayers()
}


//Pick number of Players
//This was set up in this way to be able to expand to more players if desired
function pickPlayers() {
  const square1 = document.querySelector('.square1')

  for (var i = 1; i <= 2; i++) {
    let player = document.createElement('div')
    player.classList.add('player', `player${i}`)
    square1.appendChild(player)
  }
}

//If a player wins
function checkForWin() {

  if(currentPlayer.position >= 100) {
    setTimeout( () => {
      let reset = confirm(currentPlayer.name + " Won! Would you like to play again")
      if (reset === true) {
        resetGame()
      } else {
        return
      }
    }, 3500 )
  } 
}


//Remove board
function deleteBoard() {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild)
  }
}


//Reset
function resetGame() {
  deleteBoard()
  currentPlayerTurn = false
  players[0].position = 1
  players[1].position = 1
  createBoard()
}


function checkLadder() {
  let ladder = [
    [2,38],
    [4,14],
    [9,31],
    [21,42],
    [28,76],
    [36,44],
    [51,67],
    [71,91],
    [80,100]
  ]

  ladder.forEach( (item) => {
    if (currentPlayer.position === item[0]) {
      currentPlayer.position = item[1]
    }
  } )
}

function checkSlide() {
  let slide = [
    [16,6],
    [47,26],
    [49,11],
    [56,53],
    [62,19],
    [64,60],
    [87,24],
    [93,73],
    [95,75],
    [98,78]
  ]

  slide.forEach( (item) => {
    if (currentPlayer.position === item[0]) {
      currentPlayer.position = item[1]
    }
  } )
}