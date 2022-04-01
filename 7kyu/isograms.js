function isIsogram(str){
    let arr = str.toLowerCase().split('')
    let hasDuplicate = arr.some((val, i) => arr.indexOf(val) !== i)
    hasDuplicate = !hasDuplicate
    return hasDuplicate
   }