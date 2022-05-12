function findMultiples(integer, limit) {
    let arr = []
     for (i = 0; i < Math.floor(limit/integer); i++){
      arr[i] =  integer * (i + 1)
    }
     return arr
   }
   