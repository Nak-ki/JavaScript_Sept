let url = new URL(location.href);
let id = url.searchParams.get('id')


fetch (`http://jsonplaceholder.typicode.com/users/${id}`)
    .then (value => value.json())
    .then(user => {

        for (const userKey in user) {

            if (userKey === 'address' || userKey === 'company'){
                    let pAddress = document.createElement('p')
                    pAddress.innerText = `${userKey}:`

                    document.body.appendChild(pAddress)

                for (const userKKey in user[userKey]) {
                    if (userKKey === 'geo'){
                        let pGeo = document.createElement('p')
                        pGeo.innerText = `${userKKey}:`

                        pAddress.appendChild(pGeo)

                        let geo = user.address.geo

                            for (const geoKey in geo) {
                                let p = document.createElement('p')
                                p.innerText = `${geoKey}: ${geo[geoKey]}`

                                pGeo.appendChild(p)
                            }
                    }
                    else {
                        let p = document.createElement('p')
                        p.innerText = `${userKKey}: ${user[userKey][userKKey]}`

                        pAddress.appendChild(p)
                    }



                }
            }
        else {
            let p = document.createElement('p')
                p.innerText = `${userKey}: ${user[userKey]}`

                document.body.appendChild(p)
            }
        }

    })

