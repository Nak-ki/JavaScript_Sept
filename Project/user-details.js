let url = new URL(location.href)

let id = url.searchParams.get('id')
fetch (`http://jsonplaceholder.typicode.com/users/${id}`)
    .then (value => value.json())
    .then(user => {

        let section = document.createElement('section')
        let button = document.createElement('button')
        button.innerText = 'Post of current user'
        button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then (value => value.json())
                .then(posts => {
                    let div = document.createElement('div')
                    div.classList.add('posts')

                    button.setAttribute('disabled', '')

                    for (const postKey of posts) {
                        let button = document.createElement('button')
                        button.innerText = 'Show'
                        button.onclick = () => {
                            window.location.href = `post-details.html?id=${postKey.id}`
                        }

                        let divBlock = document.createElement('div')
                        let title = document.createElement('p')
                        title.innerText = postKey.title

                        divBlock.append(title, button)
                        div.appendChild(divBlock)
                    }
                    section.appendChild(div)
                })
        }
        function choosing(user) {
            for (const item in user) {
                if (typeof user[item] === "object") {
                    //console.log(item)
                    let p = document.createElement('p')
                    p.innerText = `${item}:`
                    section.appendChild(p)
                    choosing(user[item]);
                } else {
                    //console.log(item)
                    let p = document.createElement('p')
                    p.innerText = `${item}: ${user[item]}`
                    section.appendChild(p)
                }
                section.appendChild(button)
                document.body.appendChild(section)
            }

        }
        choosing(user);


    })