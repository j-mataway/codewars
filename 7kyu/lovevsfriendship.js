function wordsToMarks(string){
    let sum = 0
    for(let i = 0; i<string.length; i++){
      sum += string.charCodeAt(i) - 96
    }
    return sum
  }