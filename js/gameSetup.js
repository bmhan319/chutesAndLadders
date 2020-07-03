//Create Game Board
function createBoard() {
  
  //making the rows
  for (let i = 10; i >= 1; i-- ) {
    const row = document.createElement('div')
    row.classList.add('row', `row${i}`)

    //making the columns
    for (let j = 10; j > 0; j--) {
      const square = document.createElement('div')
      const number = document.createElement('h3')
      const boxNumber = (i*10) + j - 10
      
      //numbering each square
      square.classList.add('square', `square${boxNumber}`)
      number.classList.add('number', `number${boxNumber}`)
      number.innerHTML = boxNumber

      square.appendChild(number)
      row.appendChild(square)
    }
    
    gameBoard.appendChild(row)
  }

  //make ladder
  for (let i = 1; i < 10; i++) {
    const ladder = document.createElement('div')
    ladder.classList.add('ladder', `ladder${i}`)
    gameBoard.appendChild(ladder) 
  }

  //make chutes
  for (let i = 1; i < 11; i++) {
    const chutes = document.createElement('div')
    chutes.classList.add('chute', `chute${i}`)
    gameBoard.appendChild(chutes) 
  }

  //message
  message.innerHTML = "Chutes and Ladders"
}


//Pick number of Players
//Able to expand to up to 4 players if desired
function pickPlayers(num) {
  const square1 = document.querySelector('.square1')
  const messageContainer = document.querySelector('.numPlayersContainer')
  numPlayers = num
  spinButton.style.pointerEvents = "auto"
  messageContainer.style.display = "none"

  for (let i = 1; i <= numPlayers; i++) {
    const player = document.createElement('div')
    player.classList.add('player', `player${i}`)
    square1.appendChild(player)
  }
}


//Delete game board
function deleteBoard() {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild)
  }
}


//Reset game
function resetGame() {
  const messageContainer = document.querySelector('.numPlayersContainer')
  message.innerHTML = "Chutes and Ladders"
  deleteBoard()
  numPlayers = 0
  currentPlayerTurn = 0
  currentPlayer = ""
  players[0].position = 1
  players[1].position = 1
  players[2].position = 1
  players[3].position = 1
  createBoard()
  spinButton.style.pointerEvents = "none"
  messageContainer.style.display = "flex"
}

//Checking to see if player lands on a chute or ladder square
function chuteLadderPosition() {
  const player = document.createElement('div')
  let oldPosition = currentPlayer.position
  let oldSquare = document.querySelector(`.square${oldPosition}`)
  let newSquare
  const obstacles = [
    //Ladder Positions
    [2,38],
    [4,14],
    [9,31],
    [21,42],
    [28,76],
    [36,44],
    [51,67],
    [71,91],
    [80,100],
    //Chutes Positions
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

  //Assign message fragments for each obstacle
  obstacles.forEach( (item) => {
    let reaction
    let obstacle
    let direction

    if (item[0] > item[1]) {
      reaction = "Uh-oh!"
      obstacle = "chute"
      direction = "slid down"
    } else {
      reaction = "Yeah!"
      obstacle = "ladder"
      direction = "climbed up"
    }

    //Display appropriate message and assign new token position depending on type of obstacle encountered
    if (currentPlayer.position === item[0]) {
      currentPlayer.position = item[1]
      message.innerHTML = message.innerHTML + `  ${reaction}  You landed on a ${obstacle} and ${direction} to square ${currentPlayer.position}.`
    }
  } )

  //remove token from old spot and move token to new square
  newSquare = document.querySelector(`.square${currentPlayer.position}`)
  oldSquare.removeChild(oldSquare.childNodes[1])
  player.classList.add('player', `player${currentPlayer.id}`)
  newSquare.appendChild(player)
}


//Check to see if player wins
function checkForWin() {

  //If players position is 100 or greater
  if(currentPlayer.position >= 100) {
    //After 1/2 second, display winner message
    setTimeout( () => {
      let reset = confirm(currentPlayer.name + " Won! Would you like to play again")
      if (reset === true) {
        resetGame()
      } else {
        const spinButton = document.querySelector('.spinButton')
        spinButton.style.pointerEvents = 'none'
        return
      }
    }, 500 )
  } 
}