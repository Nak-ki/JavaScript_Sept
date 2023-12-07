// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world'
console.log(str.length)

str = 'lorem ipsum'
console.log(str.length)

str = 'javascript is cool'
console.log(str.length)

//---------------------------------------------------------------------------------------------------------------

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world'
console.log(str1.toUpperCase())

str1 = 'lorem ipsum'
console.log(str1.toUpperCase())

str1 = 'javascript is cool'
console.log(str1.toUpperCase())

//---------------------------------------------------------------------------------------------------------------

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

str2 = 'HELLO WORLD'
console.log(str2.toLowerCase())

str2 = 'LOREM IPSUM'
console.log(str2.toLowerCase())

str2 = 'JAVASCRIPT IS COOL'
console.log(str2.toLowerCase())

//----------------------------------------------------------------------------------------------------------------

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str3 = ' dirty string   '
console.log(str3.trim())
console.log(str3.length)

//-----------------------------------------------------------------------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str4 = 'Ревуть воли як ясла повні';
console.log(str4.split(' '))

//-----------------------------------------------------------------------------------------------------------------

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0]

let newArr = arr.map(value => String(value))
//let newArr = arr.map(value =>value.toString())

console.log(newArr)

//-----------------------------------------------------------------------------------------------------------------

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = (nums, direction) => {
        if (direction === 'ascending') {
                return nums.sort((value1, value2) => (value1 - value2))
        }
// [3,11,21]
        else if (direction === 'descending') {
                return nums.sort((value1, value2) => (value2 - value1))
        } // [21,11,3]
}

console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))

// --------------------------------------------------------------------------------------------------------------

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
console.log(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCourses = coursesAndDurationArray.filter((item) => item
    .monthDuration > 5)
console.log(filterCourses)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapCourses = coursesAndDurationArray.map((value, index) => {
        return {
                id: index,
                title: value.title,
                monthDuration: value.monthDuration
        }
})

console.log(mapCourses)

//--------------------------------------------------------------------------------------------------------------
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
        {cardSuit: 'spade', value: '6', color: 'black'},
        {cardSuit: 'spade', value: '7', color: 'black'},
        {cardSuit: 'spade', value: '8', color: 'black'},
        {cardSuit: 'spade', value: '9', color: 'black'},
        {cardSuit: 'spade', value: '10', color: 'black'},
        {cardSuit: 'spade', value: 'jack', color: 'black'},
        {cardSuit: 'spade', value: 'queen', color: 'black'},
        {cardSuit: 'spade', value: 'king', color: 'black'},
        {cardSuit: 'spade', value: 'ace', color: 'black'},
        {cardSuit: 'diamond', value: '6', color: 'red'},
        {cardSuit: 'diamond', value: '7', color: 'red'},
        {cardSuit: 'diamond', value: '8', color: 'red'},
        {cardSuit: 'diamond', value: '9', color: 'red'},
        {cardSuit: 'diamond', value: '10', color: 'red'},
        {cardSuit: 'diamond', value: 'jack', color: 'red'},
        {cardSuit: 'diamond', value: 'queen', color: 'red'},
        {cardSuit: 'diamond', value: 'king', color: 'red'},
        {cardSuit: 'diamond', value: 'ace', color: 'red'},
        {cardSuit: 'clubs', value: '6', color: 'black'},
        {cardSuit: 'clubs', value: '7', color: 'black'},
        {cardSuit: 'clubs', value: '8', color: 'black'},
        {cardSuit: 'clubs', value: '9', color: 'black'},
        {cardSuit: 'clubs', value: '10', color: 'black'},
        {cardSuit: 'clubs', value: 'jack', color: 'black'},
        {cardSuit: 'clubs', value: 'queen', color: 'black'},
        {cardSuit: 'clubs', value: 'king', color: 'black'},
        {cardSuit: 'clubs', value: 'ace', color: 'black'},
        {cardSuit: 'heart', value: '6', color: 'red'},
        {cardSuit: 'heart', value: '7', color: 'red'},
        {cardSuit: 'heart', value: '8', color: 'red'},
        {cardSuit: 'heart', value: '9', color: 'red'},
        {cardSuit: 'heart', value: '10', color: 'red'},
        {cardSuit: 'heart', value: 'jack', color: 'red'},
        {cardSuit: 'heart', value: 'queen', color: 'red'},
        {cardSuit: 'heart', value: 'king', color: 'red'},
        {cardSuit: 'heart', value: 'ace', color: 'red'}
]


// - знайти піковий туз
console.log(cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace'))

// - всі шістки
console.log(cards.filter(value => value.value === '6'))

// - всі червоні карти
console.log(cards.filter(value => value.color === 'red'))

// - всі буби
console.log(cards.filter(value => value.cardSuit === 'diamond'))

// - всі трефи від 9 та більше
console.log(cards.filter(value => value.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(value.value) ))

// ----------------------------------------------------------------------------------------------------------------------
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let rdc= cards.reduce((previousValue, currentValue) =>{
        if (currentValue.cardSuit === 'spade') {
                previousValue.spades.push(currentValue)
        } else if (currentValue.cardSuit === 'diamond') {
                previousValue.diamonds.push(currentValue)
        } else if (currentValue.cardSuit ==='heart') {
                previousValue.hearts.push(currentValue)
        } else {
                previousValue.clubs.push(currentValue)
        }
return previousValue

},{spades:[], diamonds:[], hearts:[], clubs:[]} )

console.log(rdc)

// ---------------------------------------------------------------------------------------------------------------
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
        {
                title: 'JavaScript Complex',
                monthDuration: 5,
                hourDuration: 909,
                modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
                title: 'Java Complex',
                monthDuration: 6,
                hourDuration: 909,
                modules: ['html',
                        'css',
                        'js',
                        'mysql',
                        'mongodb',
                        'angular',
                        'aws',
                        'docker',
                        'git',
                        'java core',
                        'java advanced']
        },
        {
                title: 'Python Complex',
                monthDuration: 6,
                hourDuration: 909,
                modules: ['html',
                        'css',
                        'js',
                        'mysql',
                        'mongodb',
                        'angular',
                        'aws',
                        'docker',
                        'python core',
                        'python advanced']
        },
        {
                title: 'QA Complex',
                monthDuration: 4,
                hourDuration: 909,
                modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
                title: 'FullStack',
                monthDuration: 7,
                hourDuration: 909,
                modules: ['html',
                        'css',
                        'js',
                        'mysql',
                        'mongodb',
                        'react',
                        'angular',
                        'aws',
                        'docker',
                        'git',
                        'node.js',
                        'python',
                        'java']
        },
        {
                title: 'Frontend',
                monthDuration: 4,
                hourDuration: 909,
                modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
]
// --написати пошук всіх об'єктів, в який в modules є sass

console.log(coursesArray.filter((value => value.modules.includes('sass'))))

// --написати пошук всіх об'єктів, в який в modules є docker

console.log(coursesArray.filter((value=> value.modules.includes('docker'))))