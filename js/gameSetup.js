let gameBoard = document.querySelector('.gameBoard')

//Create Game Board
function createBoard() {
  for (var i = 10; i >= 1; i-- ) {
    let row = document.createElement('div')
    row.classList.add('row', `row${i}`)

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
}


//Pick number of PLayers
function numPlayers(players) {
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