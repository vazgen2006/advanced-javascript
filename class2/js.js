class EmIli{

    constructor(name, age,){
        this.name = name 
        this.age = age 

    }

    info(lived){
        this.lived = lived
    }


    info2(hi){
        console.log(`меня зовут ${this.name} мне ${this.age} я живу в ${this.lived} `)
    }

}

let emil = new EmIli(`Emili`, 10)
emil.info(`Украина`)