  //////////////////////////////////////////1//////////////////////////////////////
 //    var today = new Date();
  //    var day = today.getDay();
  //    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  //    console.log("Today is : " + daylist[day] + ".");
  //    var hour = today.getHours();
  //    var minute = today.getMinutes();
  //    var second = today.getSeconds();
  //   var prepand = (hour >= 12)? " PM ":" AM ";
  //   hour = (hour >= 12)? hour - 12: hour;
  //   if (hour===0 && prepand===' PM ') 
  //   { 
  //   if (minute===0 && second===0)
  //   { 
  //   hour=12;
  //    prepand=' Noon';
  //    }     
  //   else
  //   { 
  //   hour=12;
  //   prepand=' PM';
  //    } 
  //   } 
  //   if (hour===0 && prepand===' AM ') 
  // { 
  //   if (minute===0 && second===0)
  //   { 
  //    hour=12;
  //   prepand=' Midnight';
  //   } 
  //   else
  //   { 
  //   hour=12;
  //   prepand=' AM';
  //   } 
  //   } 
  //   console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

  /////////////////////////////////////////////2//////////////////////////////////////////////
  
  // class Clock {
  //   constructor({ template }) {
  //     this.template = template;
  //   }
  
  //   render() {
  //     let date = new Date();
  
  //     let hours = date.getHours();
  //     if (hours < 10) hours = '0' + hours;
  
  //     let mins = date.getMinutes();
  //     if (mins < 10) mins = '0' + mins;
  
  //     let secs = date.getSeconds();
  //     if (secs < 10) secs = '0' + secs;
  
  //     let output = this.template
  //       .replace('h', hours)
  //       .replace('m', mins)
  //       .replace('s', secs);
  
  //     console.log(output);
  //   }
  
  //   stop() {
  //     clearInterval(this.timer);
  //   }
  
  //   start() {
  //     this.render();
  //     this.timer = setInterval(() => this.render(), 1000);
  //   }
  // }
  
  
  // let clock = new Clock({template: 'h:m:s'});
  // clock.start();
  