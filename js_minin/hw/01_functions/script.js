// Перепишите функцию checkAndLogAge таким образом, чтобы:
// 1. В консоли можно было определить что это за объект (человек или машина)
// 2. Мы могли сами определить с каким возрастом сравнивать (не только 10 лет, но
// и любой другой возраст), причем это должно быть отображено в консоли

var carName = 'ford'
var carYear = 2013
var personYear = 1990

function calculateAge(year) {
  var currentYear = 2022
  var result = currentYear - year
  return result
}

function checkAngLogAge(year, name, compareTo) {
  if (calculateAge(year) < 10 ) {
    console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
  } else {
    console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
  }
}

checkAngLogAge(carYear, 'машины', 2)
checkAngLogAge(personYear, 'человека', 56)