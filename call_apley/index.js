// function hello() {
//     console.log(`hello`, this)
// }


// const person = {
//     name: `VaLod` ,
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job, phone){
//         console.group(`${this.name} info`)
//         console.log(`My name is ${this.name}`)
//         console.log(`age is ${this.age}`)
//         console.log(`job is ${job}`)
//         console.log(`phone is ${phone}`)
//         console.groupEnd()
//     }

// }




// const lena = {
// name: `Elena`,
// age: 32

// }

// const fnLenaInfoLog =  person.logInfo.bind(lena)
// fnLenaInfoLog(`Manager`, `093-87-54-45` )


// function hi() {}

// const person2 = {

//     Info: function(job, phone, iq){
//         console.group(`${this.name} info`)
//         console.log(`My name is ${this.name}`)
//         console.log(`age is ${this.age}`)
//         console.log(`job is ${job}`)
//         console.log(`phone is ${phone}`)
//         console.log(`iq is ${iq}`)
//         console.groupEnd()
//     }

// }




// const gev = {
//     name: `Gev`,
//     age: 14

// }

// const fnGevInfoLog = person2.Info.bind(gev)
// fnGevInfoLog(`barAdi`, `088-38-48-mrUt`, `25` )

/////////////////////////////////////////////////////////////im grac////////////////////////////////////////////

// const person3 = {

//     information: function (age) {
//         console.log(`name ---- ${this.name}`)
//         console.log(`surname ---- ${this.surname}`)
//         console.log(`age ---- ${age}`)
        
//     }

// }

 
// const jem = {
//     name: `Jem`,
//     surname: `thomson`
// }


// person3.information.bind(jem, 23)()
// person3.information.call(jem, 23)
// person3.information.apply(jem, [23])


// const array = [1,2,3,4,5]

// Array.prototype.multiBy = function (n) {
//         return this.map(function (i) {
//             return i * n
//         })
// }

// console.log(array.multiBy(20))



// const person4 = {

//     info: function (job, phone) {
//         console.log(`name ${this.name}`)
//         console.log(`surname ${this.surname}`)
//         console.log(`school is ${this.school}`)
//         console.log(`birthed in ${this.birthed}`)
//         console.log(`rating in school ${this.rating}`)
//         console.log(`mather name is ${this.mather_name}`)
//         console.log(`father name is ${this.father_name}`)
//         console.log(`job is ${job}`)
//         console.log(`phone is  ${phone}`)
        
//     }
    
// }

// const incy = {
//     name: `Tomas`,
//     surname: `Shelby`,
//     school: `256` ,
//     rating: `5 and 6`,
//     mather_name: `Fiona`,
//     father_name: `Shrek`,
//     birthed: `in october`
// }

// person4.info.call(incy , `does not have`, `091-73-31-12`)





    
