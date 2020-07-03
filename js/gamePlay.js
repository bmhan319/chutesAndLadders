window.addEventListener('load', createBoard)

//General Variables
let numPlayers = 3
let currentPlayerTurn = 0
let currentPlayer
let message
let players = [
  {
    name: "Green Player",
    id: 1,
    position: 1
  },
  {
    name: "Blue Player",
    id: 2,
    position: 1
  },
  {
    name: "Red Player",
    id: 3,
    position: 1
  },
  {
    name: "Purple Player",
    id: 4,
    position: 1
  }
]

function playGame() {
  movePlayer( spin() )
  setTimeout( ()=>chuteLadderPosition(), 4000)
  setTimeout( ()=>checkForWin(), 4200)
}