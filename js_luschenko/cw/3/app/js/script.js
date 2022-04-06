let a = 19;

// >= <= == !=
// if (a != 9) {
//     //true
//     console.log('yes');
// } else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

// () => стрелочная функция
button.onclick = () => {
    let num = +input.value;

    if (num >= 16 && num < 60) {
        console.log('welcome');
    } else if (num > 60){
        console.log('error');
    } else {
        console.log('you shall not pass');
    }

    switch (num) {
        case 15:
            console.log('Еще год потерпи');
            break;
        case 16:
            console.log('Ура можно');
            break;
        default:
            console.log('Ok!');
    }
}

let b = 4;

console.log(b == 3 || b == 7); // && - оператор И; || - оперетор ИЛИ