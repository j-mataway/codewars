function between(a, b) {
    let arr = []
   for(let i = a; i <= b; i++){
     arr[i - a] = i
   }
    return arr
  }

// starts at value a, returns array of all numbers upto and including b

//using push()
//   function between(a, b) {
//     // your code here
//     arr = []
//     for(i = a;i <= b; i++){ 
//         arr.push(i)
//     }
//     return arr
//   }