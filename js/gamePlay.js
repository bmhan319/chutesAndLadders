//Various Timers built into each players turn
//1 - wheel spins for 3 seconds (setup in css animation)
//2 - tokens move squares based on spin at 3.5 seconds
//3 - tokens move squares based on obstacles at 4 seconds
//4 - token is checked to see if it won game at 4.2 seconds
//5 - mouse clicking is disabled for 4.2 seconds to allow game to run all prior steps
//6 - winner notification pops up at 4.7 seconds

//Load GameBoard on load
window.addEventListener('load', createBoard)

//General Variables
let gameBoard = document.querySelector('.gameBoard')
let numPlayers = 2
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

//Play Game
function playGame() {
  movePlayer( spin() )
  
  //delay of 4 secs ig given to allow tokens to finish moving to new square based on the spin
  //then it checks for obstacles and will re-move the token to the newest position based on obstacle
  setTimeout( ()=>chuteLadderPosition(), 4000)
  
  //delay of 4.2 secs is given to allow the game to check and move token to new positions based on
  //the encountered obstacle, then it will check to see if the game is won
  setTimeout( ()=>checkForWin(), 4200)
}