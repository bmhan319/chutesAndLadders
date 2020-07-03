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
  setTimeout( ()=>chuteLadderPosition(), 4000)
  setTimeout( ()=>checkForWin(), 4200)
}