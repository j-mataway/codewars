function missingNo(nums) {
    for(let i = 0; i <= 100; i++){
      if(nums.indexOf(i) === -1){
        return i
        break
     }
    }
  }