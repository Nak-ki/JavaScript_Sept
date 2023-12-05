// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//S = a x b

// let a = 2;
// let b = 4;

let areaOfRectangle = (a,b)  => a * b
console.log(areaOfRectangle(10,20))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let r = 10;
// let p = 3.14;

let areaOfRound = (p,r) => p * (r * 2)
console.log(areaOfRound(3.14,12))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// S = 2πr2 + 2πrh

// let rr = 4;
// let h = 5;

let cylinderArea = (r,h) => (2 * Math.PI * (r * 2)) + (2 * Math.PI * r * h)
    console.log(cylinderArea(4,5))


// - створити функцію яка приймає масив та виводить кожен його елемент

// let rnds = [1, 'peach', true, 13, 'cranberry']

let getItems = (array) => {
    for (let item of array) {
    console.log(item)
    }
}
getItems([1, 'peach', true, 13, 'cranberry'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let txt = prompt('Some text', "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, facilis!")
let createParagraph = (txt) => {
    document.write (`<p>${txt}</p>`)
}
createParagraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, libero.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList = (txt) => {
    document.write(
        `<ull>
            <li>${txt}</li>
            <li>${txt}</li>
            <li>${txt}</li>
        </ull>`
    )
}
createList('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//let liTxt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
//let liQuantity = 3;
let createList2 = (liTxt, liQuantity) =>{
    document.write(`<ul>`)
    for (let i = 0; i < liQuantity; i++) {
        document.write(`<li>${liTxt}</li>`)
    }
    document.write(`</ul>`)
}
createList2('Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, libero.', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//let frts = ['orange', 1, 'strawberry', true, 18]

let lists = (frts) => {
   document.write(`<ul>`)
    for( let item of frts) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
lists(['orange', 1, 'strawberry', true, 18])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let usrss = [
    {name: 'vasya', age: 31, id: false},
    {name: 'petya', age: 30, id: true},
    {name: 'kolya', age: 29, id: true},
    {name: 'olya', age: 28, id: false},
    {name: 'max', age: 30, id: true},
    {name: 'anya', age: 31, id: false},
    {name: 'oleg', age: 28, id: false},
    {name: 'andrey', age: 29, id: true},
    {name: 'masha', age: 30, id: true},
    {name: 'olya', age: 31, id: false},
    {name: 'max', age: 31, id: true}
]
let usrs = (usrss) => {
    for (let user of usrss) {
        document.write(`<div><h4>id: ${user['id']} name: ${user['name']} age: ${user['age']}</h4></div>`)
    }
}
usrs(usrss)

// - створити функцію яка повертає найменьше число з масиву

let arrs =[23, 56, 4, 45];
let returnNumber = (arrs) => {
    let minNumber = arrs[0];
    for ( let arr of arrs) {
        if ( arr < minNumber){
            minNumber = arr
        }
    }
    return minNumber
}
console.log(returnNumber(arrs))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrays = [23, 56, 10, 45, 3,15];
let returnNumb = (arrays) => {
    let sumNumber = 0;
    for (let ar of arrays) {
        sumNumber += ar
    }
    return sumNumber
}
console.log(returnNumb(arrays))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrsss = [23, 56, 4, 45, 7, 143];
let index1 = +prompt("index1", '1')
let index2 = +prompt('index2', '2')

let  swap= (arrsss, index1, index2) => {
    let indx = arrsss[index1]
    arrsss[index1] = arrsss[index2]
    arrsss[index2]= indx
    return arrsss
}

//let arrSwap = swap(arrsss,index1,index2)
console.log(swap(arrsss,index1,index2))


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let value = 10000
let currencys = [{currency:'USD',value:40},{currency:'EUR',value:42}]

let exchange = (sumUAH, currencyValues, exchangeCurrency) => `${sumUAH / currencyValues}${exchangeCurrency}`


for (let item of currencys) {
    let result = exchange(value, item['value'], item['currency'])
    console.log(result)
}