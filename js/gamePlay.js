window.addEventListener('load', createBoard)

let players = [{
  name: "Player1",
  id: 1,
  position: 1
}]

let currentPlayerTurn = 0;

function playGame() {
  movePlayer( spin() )
}