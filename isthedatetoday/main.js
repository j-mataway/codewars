function isToday(date) {
    var today = new Date()
    var todaysdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    
    if (todaysdate === date){return true}
    else {return false}
  }


// with .toDateString()
//returns Thu Jan 01 1970
// function isToday(date) {
//     return new Date().toDateString() === date.toDateString();
//   }