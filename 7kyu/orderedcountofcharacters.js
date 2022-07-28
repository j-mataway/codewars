var orderedCount = function (text) {
    let arr = text.split('')
    let chars = [... new Set(arr)]
    let solution = []
    for(char of chars){
      let occurences = arr.filter(x => x === char).length
      solution.push([char, occurences])
    }
    return solution
  }