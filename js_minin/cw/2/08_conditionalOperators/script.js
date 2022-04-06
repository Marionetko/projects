/*
    &&  | true  | false
  true  | true  | false
  false | false | false

    ||  | true  | false
  true  | true  | true
  false | true  | false

  && (и) - true если все значения true
  || (или) - true если хоть одно значение true
  !  (нет) - инвертирует true или false
*/

var currentYear = 2022
var carName = 'Ford'
var carYear = 2018
var carAge = currentYear - carYear

// если возраст машины меньше 5 лет = выводим сообщение
// если возраст машины больше или равно 5 лет и меньше или ровно 10 лет = новое сообщение
// иначе = другое сообщение

if (carAge < 5) {
  console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
  console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
} else {
  console.log('Возраст ' + carName + ' равняеться ' + carAge + ' годам')
}

// 0 null undefined '' NaN - приводят к false

var str = 'Hello'

if (4) {
  console.log('Значение true')
} else {
  console.log('Значение false')
}