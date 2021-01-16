let obj = { x: 10, y: 20, z: 30 };
const cloneObj = {};
for(let key in obj) {
    cloneObj[key] = obj[key]
}

console.log(cloneObj)