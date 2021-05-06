//Connect "Guess" button to "random" function
document.getElementById('button').addEventListener ('click',randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer() {
  userGuess = document.getElementById('input') .value 
  userGuess = parseInt(userGuess)

  //generate random number
  randomNumber = (Math.random() * 8) + 1
  randomNumber = parseInt(randomNumber)

  if (userGuess == randomNumber) {
    document.getElementById('answer').innerHTML = "You Win!"
  }
}