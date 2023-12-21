// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// console.log(document.forms)
// console.log(document.form1)

let form1 = document.forms[0]
console.log(form1)

form1.onsubmit = function (ev){
    ev.preventDefault()
    console.log(this.username.value)
    console.log(this.surname.value)
    console.log(this.age.value)
}
//--------------------------------------------------------------------------------------------------------------------------

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

window.addEventListener('load', function (){
    if (!localStorage.getItem('number')) {
    localStorage.setItem('number', 0)
} else {
        let div = document.getElementById('num')
        let count = localStorage.getItem('number')
        let number = JSON.parse(count) + 1
        div.innerText = `number: ${number}`
            localStorage.setItem('number', number)
    }
})
// --------------------------------------------------------------------------------------------------------------------------

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

window.addEventListener('load', function (){
    let session = JSON.parse(localStorage.getItem('session')) || []
    let date = new Date().getDate()
    let month = new Date().getMonth() +1
    let time = new Date().getTime()
    session.push({date, month, time})

    localStorage.setItem('session', JSON.stringify(session))
})

//--------------------------------------------------------------------------------------------------------------------//

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let array=[
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
//     {id: 5, name: 'max', age: 30, status: true},
//     {id: 6, name: 'anya', age: 31, status: false},
//     {id: 7, name: 'oleg', age: 28, status: false},
//     {id: 8, name: 'andrey', age: 29, status: true},
//     {id: 9, name: 'masha', age: 30, status: true},
//     {id: 10, name: 'olya', age: 31, status: false},
//     {id: 11, name: 'max', age: 31, status: 'tru'},
//     {id: 12, name: 'vasya', age: 31, status: 'fals'},
//     {id: 13, name: 'petya', age: 30, status: 'tru'},
//     {id: 14, name: 'kolya', age: 29, status: 'tru'},
//     {id: 15, name: 'olya', age: 28, status: 'fals'},
//     {id: 16, name: 'max', age: 30, status: 'tru'},
//     {id: 17, name: 'anya', age: 31, status: 'fals'},
//     {id: 18, name: 'oleg', age: 28, status: 'fals'},
//     {id: 19, name: 'andrey', age: 29, status: 'tru'},
//     {id: 20, name: 'masha', age: 30, status: 'tru'},
//     {id: 21, name: 'olya', age: 31, status: 'fals'},
//     {id: 22, name: 'max', age: 3, status: true},
//     {id: 23, name: 'vasya', age: 3, status: false},
//     {id: 24, name: 'petya', age: 3, status: true},
//     {id: 25, name: 'kolya', age: 2, status: true},
//     {id: 26, name: 'olya', age: 2, status: false},
//     {id: 27, name: 'max', age: 3, status: true},
//     {id: 28, name: 'anya', age: 3, status: false},
//     {id: 29, name: 'oleg', age: 2, status: false},
//     {id: 30, name: 'andrey', age: 2, status: true},
//     {id: 31, name: 'masha', age: 3, status: true},
//     {id: 32, name: 'olya', age: 3, status: false},
//     {id: 33, name: 'max', age: 31, status: true},
//     {id: 34, name: 'vasya', age: 31, status: false},
//     {id: 35, name: 'petya', age: 30, status: true},
//     {id: 36, name: 'kolya', age: 29, status: true},
//     {id: 37, name: 'olya', age: 28, status: false},
//     {id: 38, name: 'max', age: 30, status: true},
//     {id: 39, name: 'anya', age: 31, status: false},
//     {id: 40, name: 'oleg', age: 28, status: false},
//     {id: 41, name: 'andrey', age: 29, status: true},
//     {id: 42, name: 'masha', age: 30, status: true},
//     {id: 43, name: 'olya', age: 31, status: false},
//     {id: 44, name: 'max', age: 30, status: true},
//     {id: 45, name: 'max', age: 31, status: true},
//     {id: 46, name: 'vasya', age: 31, status: false},
//     {id: 47, name: 'petya', age: 30, status: true},
//     {id: 48, name: 'kolya', age: 29, status: true},
//     {id: 49, name: 'olya', age: 28, status: false},
//     {id: 50, name: 'max', age: 30, status: true},
//     {id: 51, name: 'anya', age: 31, status: false},
//     {id: 52, name: 'oleg', age: 28, status: false},
//     {id: 53, name: 'andrey', age: 29, status: true},
//     {id: 54, name: 'masha', age: 30, status: true},
//     {id: 55, name: 'olya', age: 31, status: false},
//     {id: 56, name: 'max', age: 31, status: true},
//     {id: 57, name: 'max', age: 30, status: true},
//     {id: 58, name: 'vasya', age: 31, status: false},
//     {id: 59, name: 'petya', age: 30, status: true},
//     {id: 60, name: 'kolya', age: 29, status: true},
//     {id: 61, name: 'olya', age: 28, status: false},
//     {id: 62, name: 'max', age: 30, status: true},
//     {id: 63, name: 'anya', age: 30, status: false},
//     {id: 64, name: 'oleg', age: 28, status: false},
//     {id: 65, name: 'andrey', age: 20, status: true},
//     {id: 66, name: 'masha', age: 30, status: true},
//     {id: 67, name: 'olya', age: 31, status: false},
//     {id: 68, name: 'max', age: 31, status: true},
//     {id: 69, name: 'max', age: 310, status: true},
//     {id: 70, name: 'vasya', age: 310, status: false},
//     {id: 71, name: 'petya', age: 300, status: true},
//     {id: 72, name: 'kolya', age: 290, status: true},
//     {id: 73, name: 'olya', age: 280, status: false},
//     {id: 74, name: 'max', age: 300, status: true},
//     {id: 75, name: 'anya', age: 310, status: false},
//     {id: 76, name: 'oleg', age: 280, status: false},
//     {id: 77, name: 'andrey', age: 290, status: true},
//     {id: 78, name: 'olya', age: 3, status: false},
//     {id: 79, name: 'max', age: 31, status: true},
//     {id: 80, name: 'vasya', age: 31, status: false},
//     {id: 81, name: 'petya', age: 30, status: true},
//     {id: 82, name: 'kolya', age: 29, status: true},
//     {id: 83, name: 'olya', age: 28, status: false},
//     {id: 84, name: 'max', age: 30, status: true},
//     {id: 85, name: 'anya', age: 31, status: false},
//     {id: 86, name: 'oleg', age: 28, status: false},
//     {id: 87, name: 'andrey', age: 29, status: true},
//     {id: 88, name: 'masha', age: 30, status: true},
//     {id: 89, name: 'olya', age: 31, status: false},
//     {id: 90, name: 'max', age: 30, status: true},
//     {id: 91, name: 'max', age: 31, status: true},
//     {id: 92, name: 'vasya', age: 31, status: false},
//     {id: 93, name: 'petya', age: 30, status: true},
//     {id: 94, name: 'kolya', age: 29, status: true},
//     {id: 95, name: 'olya', age: 28, status: false},
//     {id: 96, name: 'max', age: 30, status: true},
//     {id: 97, name: 'anya', age: 31, status: false},
//     {id: 98, name: 'oleg', age: 28, status: false},
//     {id: 99, name: 'andrey', age: 29, status: true},
//     {id: 100, name: 'masha', age: 30, status: true}
// ]
//
//     div = document.createElement('div')
//     let p = document.createElement('p')
//     p.setAttribute('id', 'text')
//     p.innerText = 'text'
//
//     let buttonn = document.createElement('button')
//     buttonn.setAttribute('id', 'delete-element')
//     buttonn.innerText = 'Delete'
//
//     createDiv.append(p, buttonn)
//     document.body.appendChild(div)
//
//     let buttonn = document.getElementById('delete-element')
//
//     button.onclick = function () {
//         let id = prompt('delete id', 'text')
//         let element = document.getElementById(id)
//         element.remove()
//     };

//--------------------------------------------------------------------------------------------------------------------//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div = document.createElement('div')
div.innerText ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est exercitationem mollitia necessitatibus officiis veniam, voluptatibus?'
div.setAttribute('id', 'text')
let button = document.createElement('button')
button.innerText = 'disappear'

document.body.addEventListener('click', ev=>{
    text.style.display = 'none';
})
div.addEventListener('click', ev=>{
    ev.stopImmediatePropagation();
})

document.body.append(div,button)


//--------------------------------------------------------------------------------------------------------------------------

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageForm = document.createElement('form')
let ageInp = document.createElement('input')
ageInp.setAttribute('id', 'ageInp')
ageInp.setAttribute('placeholder','age')
let btn = document.createElement('button')
btn.innerText = 'Submit'
ageForm.append(ageInp, btn)
document.body.appendChild(ageForm)


ageForm.onsubmit = function (ev){
    ev.preventDefault()
    if (this.ageInp.value <= 0)
        alert('Error')
    if (this.ageInp.value < 18)
        alert('Leave this page')
    if (this.ageInp.value >=18)
        alert('Welcome')
}
