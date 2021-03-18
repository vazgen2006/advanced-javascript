// constructor functions
function Car(name, seria, year){
    // new {}
    // this -> {}
    this.name = name;
    this.seria = seria;
    this.year = year;
    this.drive = function () {
        console.log(`${this.name} ${this.seria} is drive`)
    }
    // return  {}
}
const BMW = new Car('sadfasdf', 'asfsa', 456454)
const MERC= new Car('MERC', 'asfsa', 4545)
white_check_mark
eyes
raised_hands






////////////////////////////instanceof//////////////////////
BMW instanceof Object //true
BMW instanceof Array //false
BMW instanceof Car //true}
// instanceof boolean
// primitive types "dont have" instanceof better typeof for primitive types
///////////////////////////link constructor ////////////////
let E = new Mitsubishi.constructor('havayi', 'mi ', 5656)

// Native constructor
new Object();
new Aryay();
new RegExp();
new Date();