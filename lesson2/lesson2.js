//Задавние Вывести четные числа от 10 до 50

for (let i=10; i<=50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
//Мой профайл
const profile = {
    name: 'Vladimer',
    lastName: 'Podporin',
    age: 25,
    pets: false
}
console.log(profile)
//упорядочить элементы
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
console.log(array[3],array[7],array[0],array[8],array[11],array[5],array[9],array[6],array[4],array[1],array[12],array[2],array[10])//без переменной
result =array[3]+array[7]+' '+array[0]+' '+array[8]+' '+array[11]+' '+array[5]+' '+array[9]+' '+array[6]+array[4]+array[1]+array[12]+' '+array[2]+' '+array[10]//переменная с упорядоченым текстом  и пробелами
console.log(result)//из массива собирается строка

//функция для выдвода имени и фамилии
const person = (firstName,secondName)=> {
    const fullName = `${firstName} ${secondName}`;
    console.log(fullName);
}

person('Vladimer','Podporin')


//Задание:Вывести в консоль нечетные числа
let n =21;
while (n <= 67) {
    if (n%2!=0) {
        console.log(n)        
    } 
    // else {
    //     console.log('Четное число') проверял для себя
    // }
    n++;
    } 