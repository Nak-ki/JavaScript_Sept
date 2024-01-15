let url1 = new URL(location.href)

let id = url1.searchParams.get('id')
fetch (` https://jsonplaceholder.typicode.com/posts/${id}`)
    .then (value => value.json())
    .then(post => {

        let section = document.createElement('section')
        let div = document.createElement('div')
        div.classList.add('post')

        let p = document.createElement('p')
            p.innerText = `User_Id: ${post.userId}`
        let p2 = document.createElement('p')
            p2.innerText = `Id: ${post.id}`
        let h3 = document.createElement('h3')
            h3.innerText = `Title: ${post.title}`
        let p3 = document.createElement('p')
            p3.innerText = `Post: ${post.body}`

        let button = document.createElement('button')
        button.innerText = 'Show comment'
            button.onclick = () => {
            fetch(` https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(value => value.json())
                .then(comments => {
            let div = document.createElement('div')
            div.classList.add('comments')

                for (const commentsElement of comments) {
                    let comment = document.createElement('div')
                    comment.classList.add('comment')
                    let p4 = document.createElement('p')
                    p4.innerText = `Post_Id: ${commentsElement.postId}`
                    let p5 = document.createElement('p')
                    p5.innerText = `Id: ${commentsElement.id}`
                    let p6 = document.createElement('p')
                    p6.innerText = `Name: ${commentsElement.name}`
                    let p7 = document.createElement('p')
                    p7.innerText = `Email: ${commentsElement.email}`
                    let p8 = document.createElement('p')
                    p8.innerText = `Comment: ${commentsElement.body}`

                    comment.append(p4, p5, p6, p7, p8)
                    div.appendChild(comment)
                    section.appendChild(div)
                }

            })
        }
        div.append(p, p2, h3, p3, button)
        section.appendChild(div)
        document.body.appendChild(section)
    })

