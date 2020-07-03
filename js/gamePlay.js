window.addEventListener('load', createBoard)

//let currentPlayerTurn = false
let numPlayers = 3
let currentPlayerTurn = 0
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
  },
  {
    name: "Player3",
    id: 3,
    position: 1
  },
  {
    name: "Player4",
    id: 4,
    position: 1
  }
]

function playGame() {
  movePlayer( spin() )
  setTimeout( ()=>chuteLadderPosition(), 4000)
  setTimeout( ()=>checkForWin(), 4200)
}