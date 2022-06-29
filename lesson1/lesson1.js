//Задание:описать город

// const a ={
//     city: 'Anzhero-Sudzhensk',
//     country: 'Russia',
//     number: 85000,
//     footbal_stadium: true,
// }
// console.log (a.city, a.number)

// Задание:Найти площадь прямоугольника
// const fSquare = (b,c) => {
//     square = b * c
//     console.log(square)
// }
// height = 40;
// width = 70;
// fSquare(height,width)

//Задание:2 машины едут навстречу,  найти расстояние
// time = 2;
// speedOfFirst = 95;
// speedOfSecond = 114;

// const fDistance = (d,f,g) => {
//     distance = d*(f+g);
// }

// fDistance(time, speedOfFirst, speedOfSecond);
// console.log(distance);


//Задание: вывести условия от значения рандомного числа сначала через if потом switch case
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// if (randomNumber < 20) {
//     console.log('randomNumber меньше 20')
// } else if (randomNumber > 50) {
//     console.log('randomNumber больше 50')
// } else {
//     console.log('randomNumber больше 20, и меньше 50')
// }

switch (randomNumber<20) {
    case true:
        console.log('randomNumber меньше 20');
    break;
    case false:
        switch (randomNumber>50) {
            case true:
                console.log('randomNumber больше 50');
                break;
            default:
                console.log('randomNumber больше 20, и меньше 50');
        }

}

