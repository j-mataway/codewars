function eachCons(array, n) {
    let newArr = []
    for (i = 0; i <= array.length - n; i++){
      let temp = []
      for(j = 0; j < n; j++){
        temp.push(array[i + j])
      }
      newArr.push(temp)
    }
      return newArr;
    }