function removeEveryOther(arr){
    let result = []
      for (i = 0; i < arr.length; i++){
      if ((i + 1) % 2 != 0){
      result.push(arr[i])
      }
    }
     return result
    }