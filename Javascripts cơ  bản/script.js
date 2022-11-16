function findValue(haystack,needle) {
    for(const item of haystack) {
       if(item === needle) {
          return true;
       }
    }
    return false;
 }
 let names = ["A","B","C","D","E"];
 console.log(findValue(names,"a"));