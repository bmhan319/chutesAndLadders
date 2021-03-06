//Spin the weheel
function spin() {
  // min and max need a wide range in order for wheel to spin 
  let min = 1024
  let max = 9999
  let deg = Math.floor( Math.random() * (max - min) + 1 ) + min
  let result

  //spin the wheel
  document.getElementById('box').style.transform = 'scale(1.3) rotate(' + deg + 'deg)'

  //turn off ability to click while wheel is spinning and tokens are moving
  //set for 4.2 seconds.
  //wheel spins for 3 secs, token moving starts at 3.5 secs, 
  spinButton.style.pointerEvents = 'none'
  setTimeout( () => {spinButton.style.pointerEvents = 'auto'}, 4200)

  //reduce the 'deg' down to the lowest degree under 361 in order to calculate the spun number
  while (deg > 360) {
    deg = deg - 360
  }

  //if 'deg' is within a certain degree range, return color(number) on the spinner
  //Blue(2): 1 - 60
  //Yellow(3): 61 - 120
  //Purple(1): 121 - 180
  //Pink(6): 181 - 240
  //Orange(4): 241 - 300
  //Red(5): 301 - 360
  if (deg <= 60 && deg > 0) {
    result = 2
  } else if (deg <= 120 && deg > 60) {
    result = 3
  } else if (deg <= 180 && deg > 120) {
    result = 1
  } else if (deg <= 240 && deg > 180) {
    result = 6
  } else if (deg <= 300 && deg > 240) {
    result = 4
  } else if (deg <= 360 && deg > 300) {
    result = 5
  }
  return result
}


//Move players around the board
function movePlayer(result) {
  let oldPosition
  let oldSquare

  //determine whose turn it is
  playersTurn()
  if (currentPlayerTurn === numPlayers) {
    currentPlayerTurn = 0
  }

  //setting variables depending on which players turn it is
  oldPosition = currentPlayer.position
  oldSquare = document.querySelector(`.square${oldPosition}`)
  currentPlayer.position += result

  
  //wait 3.5 seconds before moving token to give the spinner enough time to stop
  //spinner spins for 3 secs.
  setTimeout( ()=>{
    let newSquare = document.querySelector(`.square${currentPlayer.position}`)
    let player = document.createElement('div')
    
    //if token goes beyond square 100, set the square to be 100
    if (newSquare === null) {
      newSquare = document.querySelector('.square100')
    }
    
    oldSquare.removeChild(oldSquare.childNodes[1])
    player.classList.add('player', `player${currentPlayer.id}`)
    newSquare.appendChild(player)
    message.innerHTML = `${currentPlayer.name} rolled a ${result} and moved from square ${oldPosition} to square ${currentPlayer.position}.`

  }, 3500 ) 
  return
}


//Determine Which Players Turn 
function playersTurn() {
  switch (currentPlayerTurn) {
    case 0:
      currentPlayer = players[0]
      currentPlayerTurn++
      break;
    case 1: 
      currentPlayer = players[1]
      currentPlayerTurn++
      break;
    case 2:
      currentPlayer = players[2]
      currentPlayerTurn++
      break;
    case 3: 
      currentPlayer = players[3]
      currentPlayerTurn++
      break;
  }
}