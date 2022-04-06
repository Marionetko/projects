var carName = 'Ford'
var carYear = 2013
var personYear = 1990

function calculateAge(year) {
  var currentYear = 2022
  var result = currentYear - year
  return result
}

function checkAngLogAge(year) {
  if (calculateAge(year) < 10 ) {
    console.log('Возраст меньше 10 лет')
  } else {
    console.log('возраст больше 10 лет')
  }
}

checkAngLogAge(carYear)
checkAngLogAge(personYear)

// if (calculateAge(carYear) < 10 ) {
//   console.log('Возраст меньше 10 лет')
// } else {
//   console.log('возраст больше 10 лет')
// }

// if (calculateAge(personYear) < 10 ) {
//   console.log('Возраст меньше 10 лет')
// } else {
//   console.log('возраст больше 10 лет')
// }