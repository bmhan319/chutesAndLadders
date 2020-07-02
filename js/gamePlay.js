window.addEventListener('load', createBoard)

let currentPlayerTurn = false;
let currentPlayer
let message
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

function playGame() {
  movePlayer( spin() )
  checkForWin()
  setTimeout( ()=>chuteLadderPosition(), 4000)
}