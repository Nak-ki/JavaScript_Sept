let session2 = localStorage.getItem('session')
let session3 = JSON.parse(session2)

let div1 = document.createElement('div')
div1.setAttribute('id', 'first')
for (const session of session3) {
    let div = document.createElement('div')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')

    div.classList.add('second')
    p1.innerText = session['date']
    p2.innerText = session['month']
    p3.innerText = session['time']
    div.append(p1, p2, p3)
    div1.appendChild(div)

}

document.body.appendChild(div1)