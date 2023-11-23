//Логічні розгалуження:

//  - Є змінна х, якій ви надаєте довільне числове значення.
 // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x= 8;
if (x!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

let a = 1
if (a!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

a= 0;
if (a!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

a= -1;
if (a!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

//-------------------------------------------2----------------------------------------------//
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = +prompt('Input number from 0 to 59')
if (time <= 14 && time >=0){
        console.log(`${time} First quarter`)
}
else if (time <=29 && time >= 15){
        console.log(`${time} Second quarter`)
}
else if (time <= 44 && time >= 30){
    console.log(`${time} Third quarter`)
}
else if (time <= 59 && time >= 45){
    console.log(`${time}'Fourth quarter`)
}

//------------------------------------------3---------------------------------------------//
 //- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//1-10, 11-20, 21-31

let day = +prompt('Input number from 0 to 31')
if (day >=0 && day <=10){
        console.log(`${day} First decade`)
}
else if (day >= 11 && day <=20){
        console.log(`${day} Second decade`)
}
else if (day >= 21 && day <=31) {
    console.log(`${day} Third decade`)
}

//-----------------------------------------4----------------------------------------------//
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


schedule = prompt('Enter the day of the week')
switch (schedule) {
    case 'monday':
        console.log('Go to gym!');
        break
    case 'tuesday':
        console.log('Do a homework');
        break
    case 'wednesday':
        console.log('Go to gym!!');
        break
    case 'thursday':
        console.log('Go to the manicurist');
        break
    case 'friday':
        console.log('Meet with friends and stay alive');
        break
    case'saturday':
        console.log('Clean the apartment');
        break
    case 'sunday':
        console.log('Stay in bed and watch movies');
        break
    default:
        console.log('Incorrect value entered');
        break
}

//-----------------------------------------5-------------------------------------------//
//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих дв
//   Також потрібно врахувати коли введені рівні числа.



let c = +prompt('Enter first number')
let d = +prompt('Enter second number')

if (c>d){
    console.log(`c = ${c} > d = ${d}`)
}
else if (c<d){
    console.log(`c = ${c} < d = ${d}`)
}
else if (c === d)  {
    console.log(`c=${c} === d=${d}`)
}

//-----------------------------------------6-----------------------------------------------//

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let xx = prompt()
console.log(typeof xx, xx)

 if (xx === false || xx === 0 || xx ==='' || xx === null || true === Number.isNaN || xx === undefined){
     xx = 'default'
     console.log(xx)
 } else {
     console.log(xx)

 }

 //----------------------------------7-----------------------------------------------//

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super')
}
    else {console.log('Not cool')
    }

if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super')
}
    else {console.log('Not cool')
}


if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super')                              
}
    else {console.log('Not cool')
    }
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super')                              
}
    else {console.log('Not cool')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super')                              
}
    else {console.log('Not cool')
    }
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super')                              
}
    else {console.log('Not cool')
    }