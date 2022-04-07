function stringy(size) {
    let arr = []
    for(i = 1; i <= size; i++){
      if (i % 2 !== 0){
        arr[i] = 1
      }else{arr[i] = 0}
    }
      return arr.join('')
    }

// using sting.padStart()
//x is length, anything after the length is truncated - replaces every char with '10'
//const stringy = x => ''.padStart(x,'10');