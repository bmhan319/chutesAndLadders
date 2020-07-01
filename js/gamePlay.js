window.addEventListener('load', createBoard)

let players = [
  {
    name: "Player1",
    id: 1,
    position: 1
  },
  {
    name: "Player2",
    id: 2,
    position: 1
  }
]

let currentPlayerTurn = false;
let currentPlayer

function playGame() {
  movePlayer( spin() )
  checkLadder()
  checkSlide()
  checkForWin()
}