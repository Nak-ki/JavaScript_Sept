// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User (id, name, surname, email, phone){
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
}
let users = [
    new User (1, 'Shōyō', 'Hinata', 'aaaaaaaaa@gmail.com', '380970000000' ),
    new User (2, 'Tobio', 'Kageyama','sssssssssss@gmail.com', '380961111111'),
    new User (3, 'Kōshi', 'Sugawara','sjjjssssss@gmail.com', '380961111111'),
    new User (4, 'Daichi', 'Sawamura','ssssshhhssss@gmail.com', '380961111111'),
    new User (5, 'Tetsurō', 'Kuroo','ssssnnsss@gmail.com', '380961111111'),
    new User (6, 'Kenma', 'Kozume','sdddssss@gmail.com', '380961111111'),
    new User (7, 'Morisuke', 'Yaku','sseess@gmail.com', '380961111111'),
    new User (8, 'Tōru', 'Oikawa','mmmsss@gmail.com', '380961111111'),
    new User (9, 'Hajime', 'Iwaizumi','sssttsss@gmail.com', '380961111111'),
    new User (10, 'Kōtarō', 'Bokuto','siisss@gmail.com', '380961111111')
   ]
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredList = users.filter((value => value.id % 2 === 0)
 )

console.log(filteredList)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedList =users.sort((a,b) => {
    return a.id - b.id
})
console.log(sortedList)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Clients  {
    constructor(id, name, surname , email, phone, order) {
        User.apply(this, arguments)
        this.order = order
    }
}

let clients = [
    new Clients (1, 'Shōyō', 'Hinata', 'aaaaaaaaa@gmail.com', '380970000000',['volleyball ball']),
    new Clients (2, 'Tobio', 'Kageyama','sssssssssss@gmail.com', '380961111111', ['sneakers', 'shorts']),
    new Clients (3, 'Kōshi', 'Sugawara','sjjjssssss@gmail.com', '380961111111', ['t-shirt']),
    new Clients (4, 'Daichi', 'Sawamura','ssssshhhssss@gmail.com', '380961111111', ['sweatshirt', 'jeans']),
    new Clients (5, 'Tetsurō', 'Kuroo','ssssnnsss@gmail.com', '380961111111',['hoodie', 'trousers']),
    new Clients (6, 'Kenma', 'Kozume','sdddssss@gmail.com', '380961111111',['sweatshirt', 'backpack','volleyball ball']),
    new Clients (7, 'Morisuke', 'Yaku','sseess@gmail.com', '380961111111',['windbreaker', 'sneakers']),
    new Clients (8, 'Tōru', 'Oikawa','mmmsss@gmail.com', '380961111111',['hoodie', 'jeans', 'sweatshirt','volleyball ball']),
    new Clients (9, 'Hajime', 'Iwaizumi','sssttsss@gmail.com', '380961111111',['sweatshirt', 'backpack']),
    new Clients (10, 'Kōtarō', 'Bokuto','siisss@gmail.com', '380961111111',['windbreaker', 'trousers', 'sneakers', 'socks', 'backpack'])
]

clients.sort((a, b) => a.order.length - b.order.length)

console.log(clients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (properties_model, manufacturer, year_of_manufacturer, max_speed, engine_capacity) {
    this.properties_model = properties_model
    this.manufacturer = manufacturer
    this.year_of_manufacturer = year_of_manufacturer
    this.max_speed = max_speed
    this.engine_capacity = engine_capacity

    this.drive = function (){console.log(`їдемо зі швидкістю ${max_speed} на годину`)}

    this.info = function () {
        console.log(
        `properties_model: ${this.properties_model},
        manufacturer: ${this.manufacturer}, 
        year_of_manufacturer: ${this.year_of_manufacturer}, 
        max_speed: ${this.max_speed} ,
        engine_capacity: ${engine_capacity}`
        )
    }

    this.increaseMaxSpeed = function (newSpeed) { this.max_speed += newSpeed
    }

    this.changeYear = function (newValue) {
        this.year_of_manufacturer = newValue
    }

    this.addDriver = function (driver) {
        this.driver = driver
    }

}

let newCar = new Car('Q7', 'Audi', 2022, 200, 3.5)

newCar.drive()

newCar.info()

newCar.addDriver({name:'Olya', age:23, phone:380960000000})

console.log(newCar)



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Ca_r {
    constructor(properties_model, manufacturer, year_of_manufacturer, max_speed, engine_capacity) {
        this.properties_model = properties_model
        this.manufacturer = manufacturer
        this.year_of_manufacturer = year_of_manufacturer
        this.max_speed = max_speed
        this.engine_capacity = engine_capacity
    }
    drive() {console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)}
    info = function () {
        console.log(
            `properties_model: ${this.properties_model},
                manufacturer: ${this.manufacturer}, 
                year_of_manufacturer: ${this.year_of_manufacturer}, 
                max_speed: ${this.max_speed} ,
                engine_capacity: ${this.engine_capacity}`
        )
    }
    increaseMaxSpeed = function (newSpeed) {
        this.max_speed += newSpeed
    }
    hangeYear = function (newValue) {
            this.year_of_manufacturer = newValue
    }
    addDriver = function (driver) {
            this.driver = driver
    }


}


    let newCa_r = new Ca_r('TT', 'Audi', 2021 , 200, 2.5)

    newCa_r.drive()
    newCa_r.info()
    newCa_r.addDriver({name:'Yuki', age:33, phone:380960000000})
console.log(newCa_r)



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name
        this.age = age
        this.foot_size = foot_size
    }
}
let cinderellas = [
    new Cinderella('Cinderella', 19, 36),
    new Cinderella( 'Anastasia', 18, 38),
    new Cinderella( 'Mulan', 17, 35.5),
    new Cinderella( 'Belle', 20, 37.5),
    new Cinderella( 'Aurora', 16, 39),
    new Cinderella( 'Pocahontas', 21, 37),
    new Cinderella( 'Ariel', 17, 36.5),
    new Cinderella( 'SnowWhite', 18, 35),
    new Cinderella( 'Jasmine', 18, 38.5),
    new Cinderella( 'Tiana', 23, 40),
]

class Prince {
    constructor(name, age, shoe_size) {
        this.name = name
        this.age = age
        this.shoe_size = shoe_size
    }
    findPrincess(cinderallas){
        for (const cinderalla of cinderallas) {
            if (cinderalla.foot_size === this.shoe_size){
                console.log(cinderalla)
            }
        }
    }
}
let prince =
    new Prince('Phillip', 17, 39)

prince.findPrincess(cinderellas)

