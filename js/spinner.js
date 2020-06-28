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
  //let deg = Math.floor( Math.random() * (min - max) ) + max

  document.getElementById('box').style.transform = 'scale(1.3) rotate(' + deg + 'deg)'
  spinButton.style.pointerEvents = 'none'
  setTimeout( () => {spinButton.style.pointerEvents = 'auto'}, 3100)


  while (deg > 360) {
    deg = deg - 360
  }
  return deg
}