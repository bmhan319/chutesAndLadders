function spin() {
  let x = 1000
  let y = 5000

  let deg = Math.floor( Math.random() * (x - y) ) + y

  document.getElementById('box').style.transform = 'scale(1.3) rotate(' + deg + 'deg)'

  console.log(Math.random() * -4000)
}