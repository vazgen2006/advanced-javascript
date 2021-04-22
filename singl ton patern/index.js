// // Single Ton Pattern
// class BMW {
//     constructor(){
//         if(BMW.instance) {
//             return BMW.instance
//         }
//         // constructor creation logic
//         this.model = "M3"
//         BMW.instance = this
//     }
// }
// let bmw = new BMW()
// let bmw1 = new BMW()
// bmw === bmw1 // true


// vor amen angam nuyn bany chsaqri // 

///////////////////////////////////////////////////

// class SingsTon {
//     constructor(data){
//         if(SingsTon.instance){
//             return SingsTon.instance
//         }
//         SingsTon.instance = this
//         SingsTon.exists = true 
//         this.data = data
//     }
//     getData(){
//         return this.data
//     }
// }

// const mongo = new SingsTon(`mongo`)
// const mojo = new SingsTon(`mojo`)
// console.log(mongo.data)
// console.log(mojo.data)