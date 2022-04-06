var carColor = 'green'

// if (carColor === 'green') {
//   console.log('цвет машины зеленый')
// } else if (carColor === 'yellow') {
//   console.log('цвет машины желтый')
// } else if (carColor === 'red') {
//   console.log('цвет машины red')
// } else {
//   console.log('Цвет машины неопределен')
// }

switch (carColor) {
  case 'green':
    console.log('цвет машины зеленый')
    break
  case 'yellow':
    console.log('цвет машины желтый')
    break
  case 'red':
    console.log('цвет машины красный')
    break
  default:
    console.log('Цвет машины неопределен')
}