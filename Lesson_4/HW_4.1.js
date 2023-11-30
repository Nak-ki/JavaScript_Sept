// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//S = a x b

let a = 2;
let b = 4;

function areaOfRectangle (a,b) {
    return a * b
}
let areaRec = areaOfRectangle(a,b)
    console.log(areaRec)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S= S = π × r2

let r = 10;
let p = 3.14;

function areaOfRound (p,r) {
    return p * (r * 2)
}

let areaRou = areaOfRound(p,r)
    console.log(areaRou)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S = 2πr2 + 2πrh

let rr = 4;
let h = 5;

function cylinderArea (r,h) {
    return (2 * Math.PI * (r * 2)) + (2 * Math.PI * r * h)
}

let clndr = cylinderArea(r,h)
    console.log(clndr)

// - створити функцію яка приймає масив та виводить кожен його елемент

let rnds = [1, 'peach', true, 13, 'cranberry']

function getItems(rnds) {
    for (let item of rnds) {
        console.log(item)
    }
    }
    getItems(rnds)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let txt = prompt('Some text', "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, facilis!")
function createParagraph(txt) {
        document.write (`<p>${txt}</p>`)
}
    createParagraph(txt)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(a,b,c) {
    document.write(
        `<ull>
            <li>${arguments[0]}</li>
            <li>${arguments[1]}</li>
            <li>${arguments[2]}</li>
        </ull>`
    )
}
createList('Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liTxt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
let liQuantity = 3;
    function createList2(liTxt, liQuantity){
        document.write(`<ul>`)
            for (let i = 0; i < liQuantity; i++) {
            document.write(`<li>${liTxt}</li>`)
            }
            document.write(`</ul>`)
    }
    createList2(liTxt, liQuantity)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let frts = ['orange', 1, 'strawberry', true, 18]

    function lists(frts) {
        let listNmbrs= []
        let listString = []
        let listBool = []
        for (let frt of frts) {
            if (typeof frt === 'number'){
                listNmbrs[listNmbrs.length] = frt
            }
            else if (typeof frt === "string"){
                listString[listString.length] = frt
            }
            else if (typeof frt === "boolean"){
                listBool[listBool.length] = frt
            }
            else {

            (console.log(`${frt} not string, number, boolean`))
            }
        }
        console.log(listNmbrs, listString, listBool)
        return [listNmbrs, listString, listBool]
    }
    let fr= lists([frts])
console.log(fr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
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
function userss(users) {
    for (let user of users) {
        document.write(`<div>id: ${user['id']} name: ${user['name']} age: ${user['age']}</div>`)
    }
}
userss(users)


// - створити функцію яка повертає найменьше число з масиву
let arrs =[23, 56, 4, 45];
    function returnNumber (arrs){
        let minNumber = arrs[0];
        for ( let arr of arrs) {
            if ( arr < minNumber){
                minNumber = arr
            }
        }
        return minNumber
    }
        let arr = returnNumber(arrs)
        console.log(arr)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrss =[23, 56, 4, 45];
function returnNumb (arrss) {
    let sumNumber = 0;
    for (let ar of arrss) {
        sumNumber += ar
    }
    return sumNumber
}
let sumNum = returnNumb(arrss)
console.log(sumNum)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrsss = [23, 56, 4, 45];
let index1 = +prompt("index1", '1')
let index2 = +prompt('index2', '2')

function swap(arrsss, index1, index2){
    let indx = [index1]
        arrsss[index1] = arrsss[index2]
        arrsss[index2]= indx
    return arrsss
}

let arrSwap = swap(arrsss,index1,index2)
console.log(arrSwap)



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let value = 10000
let currencys = [{currency:'USD',value:40},{currency:'EUR',value:42}]

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    return `${sumUAH / currencyValues}${exchangeCurrency}`
}

for (let item of currencys) {
    let result = exchange (value, item['value'], item['currency'])
    console.log(result)
}