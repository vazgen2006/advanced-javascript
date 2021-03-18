for(let i = 0; i < 5; i++){
    setTimeout(() => console.log(i), 1000 * i + 1000)
    }
    
    Object.defineProperty(user, "name", {
        writable: false
      });