//Create Game Board
function createBoard() {
  let gameBoard = document.querySelector('.gameBoard')

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