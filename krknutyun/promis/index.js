let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`work start`)
    }, 2000)
    setTimeout(() => {
        resolve({status: `I am working now`})
    }, 3000)
    setTimeout(() => {
        console.log(`work end yor are imposable`)
    }, 6000)
    setTimeout(() => {
        console.log(`wish you a good day`)
    }, 7000)
    setTimeout(() => {
        console.log(`See you at work tomorrow`)
    }, 8000)
    setTimeout(() => {
        console.log(`Good night 22:20`)
    }, 9000)
})


p.then((data) => {console.log(data)})




























// let p = new Promise((resolve, reject) => {
    
//     reject({status: `not okay my friend`})

// })

// p.catch((err) => {console.log(err)})






