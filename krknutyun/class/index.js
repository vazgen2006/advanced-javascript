class Animals {
    constructor(options) {
        this.age = options.age
        this.fur = options.fur
        this.eyes = options.eyes
        this.Claws = options.Claws
        this.foots = options.foots
        this.mammal = options.mammal
        this.predator = options.predator
        this.domestic = options.domestic
        this.amphibian = options.amphibian
        this.land_animal = options.land_animal
        this.water_animal = options.water_animal
    }

}

////////////////////////////////////////////////////////////////////Cat/////////////////////////////////////////////////////////////////////

class Cat extends Animals {
    constructor(options) {
        super(options)
    }

    runSpeed() {

        console.log(`14km/h`)

    }


    voice() {

        console.log(`i am cat`)

    }

    get ageInfo() {

        return this.age * 7

    }

}



let cat = new Cat({
    age: 3,
    eyes: 2,
    foots: 4,
    fur: true,
    Claws: true,
    name: `Luna`,
    mammal: true,
    predator: true,
    domestic: true,
    amphibian: false,
    land_animal: true,
    water_animal: false,
})


////////////////////////////////////////////////////////////////////Frog/////////////////////////////////////////////////////////////////////


class Frog extends Animals {
    constructor(options) {
        super(options)
    }


    runSpeed() {

        console.log(`unknown`)
        console.log(`неизвестный`)

    }

    swimSpeed() {

        console.log(`unknown`)
        console.log(`неизвестный`)
    }


    jump() {

        console.log(`1,4m`)

    }


    voice() {

        console.log(`i am frog`)

    }

}


let frog = new Frog({
    age: 1,
    eyes: 2,
    foots: 4,
    fur: false,
    Claws: false,
    name: `toi`,
    mammal: false,
    predator: true,
    domestic: false,
    amphibian: true,
    land_animal: true,
    water_animal: true,
})


////////////////////////////////////////////////////////////////////Bear/////////////////////////////////////////////////////////////////////


class Bear extends Animals {
    constructor(options) {
        super(options)
    }

    runSpeed() {

        console.log(`40km/h`)

    }

    voice() {

        console.log(`i am bear`)

    }

}


let bear = new Bear({
    age: 9,
    eyes: 2,
    foots: 4,
    fur: true,
    Claws: true,
    name: `Odeon`,
    mammal: true,
    predator: true,
    domestic: false,
    amphibian: false,
    land_animal: true,
    water_animal: false,

})


////////////////////////////////////////////////////////////////////Dog/////////////////////////////////////////////////////////////////////


class Dog extends Animals {
    constructor(options) {
        super(options)
    }

    runSpeed() {

        console.log(`15km/h`)

    }


    voice() {

        console.log(`i am dog`)

    }

    get ageInfo() {

        return this.age * 7

    }

}


let dog = new Dog({
    age: 4,
    eyes: 2,
    foots: 4,
    fur: true,
    Claws: true,
    name: `Luna`,
    mammal: true,
    domestic: true,
    predator: false,
    amphibian: false,
    land_animal: true,
    water_animal: false,

})
