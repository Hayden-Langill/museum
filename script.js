let date = 0
let age = 0

document.getElementById('button').addEventListener('click', promo)

function promo () {
  age = document.getElementById('input1').value
  age = parseInt(age)
  date = document.getElementById('input2').value
  if ((date === 'Monday' || date === 'Sunday') || (age > 2 && age < 10) || (age >= 60)) {
    document.getElementById('output').innerHTML = 'You get 1 free pass to the museum!'
  } else {
    document.getElementById('output').innerHTML = 'You are not eligible for a free pass.'
  }
}
