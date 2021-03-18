const p = new Promise((resolve, reject) => {
    console.log("setTimeout started")
    setTimeout(() => {
        console.log("setTimeout ended")
        reject({ status: `not ok` })
    }, 2000)
})

p.then((data) => console.log(data))
p.catch((error) => console.error(error))
p.finally(() => console.log(`finally`))