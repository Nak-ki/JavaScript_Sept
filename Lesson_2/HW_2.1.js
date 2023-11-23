//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

//-----------------------------------------1----------------------------------------------//

let arr = [20,'apples', true, 'tangerine',-666, 88, false,'orange','strawberry',123]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

//-----------------------------------------2+3---------------------------------------------//


let book_1 ={
        title: 'Arch of Triumph',
        pageCount: 470,
        genre: 'drama, romance',

}
let book_2 = {
    title: 'Harry Potter and the Goblet of Fire',
    pageCount: 752,
    genre: 'fantasy novel',

}
let book_3 = {
    title: 'The Godfather',
    pageCount: 433,
    genre: 'crime novel',

}

book_1.authors=['Erich Maria Remarque', 72, '(dead)']
book_2.authors=['J.K. Rowling', 58]
book_3.authors=['Mario Puzo',78,'(dead)']
console.log(book_1)
console.log(book_2)
console.log(book_3)


//------------------------------------------4---------------------------------------------//

let hogwartsUsers = [
    {name:'Harry Potter', username:'TheBoyWhoLived', password:111111111111},
    {name:'Ronald Bilius Weasley', username:'Ron', password:22222222222222},
    {name:'Hermione Jean Granger', username:'Mudblood', password:33333333333333},
    {name:'Draco Malfoy', username:'Draco', password:44444444444444},
    {name:'Fred Weasley', username:'Fred', password:55555555555555},
    {name:'George Weasley ', username:'George', password:6666666666666},
    {name: 'Bellatrix Lestrange', username:'Bella', password:77777777777777777},
    {name:'Sirius Black', username:'Padfoot', password:8888888888888},
    {name: 'Remus John Lupin', username:'Moony', password:999999999999},
    {name:'Albus Percival Wulfric Brian Dumbledore', username:'Headmaster', password:123456789}
]
console.log(hogwartsUsers[0])
console.log(hogwartsUsers[1])
console.log(hogwartsUsers[2])
console.log(hogwartsUsers[3])
console.log(hogwartsUsers[4])
console.log(hogwartsUsers[5])
console.log(hogwartsUsers[6])
console.log(hogwartsUsers[7])
console.log(hogwartsUsers[8])
console.log(hogwartsUsers[9])
