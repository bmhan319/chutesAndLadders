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
}


//Pick number of Players
function pickPlayers(players) {
  const square1 = document.querySelector('.square1')
  const section = document.querySelector('.numPlayers')
  const gameContainer = document.querySelector('.gameContainer')

  for (var i = 1; i <= players; i++) {
    let player = document.createElement('div')
    player.classList.add('player', `player${i}`)
    square1.appendChild(player)
  }

  section.style.display = "none"
  gameContainer.style.height = "100vh"
}

function checkForWin() {
  if(players[0].position >= 100) {
    setTimeout( () => {
      let reset = confirm("You Won! Would you like to play again")
      if (reset === true) {
        resetGame()
      } else {
        return
      }
    }, 3500 )
  } 
}

function deleteBoard() {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild)
  }
}

function resetGame() {
  const section = document.querySelector('.numPlayers')
  const gameContainer = document.querySelector('.gameContainer')
  
  deleteBoard()
  section.style.display = "block"
  gameContainer.style.height = "height: calc(100vh - 30px)"
  currentPlayerTurn = 0
  players[0].position = 1
  createBoard()
}


function checkLadder() {
  let ladder = [
    [2,38],
    [4,14],
    [9,31],
    [21,32],
    [26,84],
    [36,44],
    [51,67],
    [71,90],
    [80,100]
  ]

  ladder.forEach( (item) => {
    if (players[0].position === item[0]) {
      players[0].position = item[1]
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
    if (players[0].position === item[0]) {
      players[0].position = item[1]
    }
  } )
}