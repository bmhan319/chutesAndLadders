//Blue: 1 - 60
//Yellow: 61 - 120
//Purple: 121 - 180
//Pink: 181 - 240
//Orange: 241 - 300
//Red: 301 - 360

function spin() {
  const spinButton = document.querySelector('.spinButton')
  // min and max need a wide range in order for wheel to spin 
  let min = 1024
  let max = 9999
  let deg = Math.floor( Math.random() * (max - min) + 1 ) + min
  let result

  //spin the wheel
  document.getElementById('box').style.transform = 'scale(1.3) rotate(' + deg + 'deg)'

  //turn off ability to click while wheel is spinning
  spinButton.style.pointerEvents = 'none'
  setTimeout( () => {spinButton.style.pointerEvents = 'auto'}, 3100)

  //reduce the 'deg' down to the lowest degree under 361 in order to calculate the spun number
  while (deg > 360) {
    deg = deg - 360
  }

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

  let currentPlayer = players[currentPlayerTurn]
  let oldPosition = currentPlayer.position
  let oldSquare = document.querySelector(`.square${oldPosition}`)
  currentPlayer.position += result
  let newSquare = document.querySelector(`.square${currentPlayer.position}`)
  console.log(currentPlayer)
  console.log(oldSquare)
  console.log(newSquare)

  oldSquare.removeChild(oldSquare.childNodes[1])
  let player = document.createElement('div')
  player.classList.add('player', `player${currentPlayer.id}`)
  newSquare.appendChild(player)
}