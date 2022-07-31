function printerError(s) {
    let count = 0
    for (let i = 0; i < s.length; i++){
      if(s.charCodeAt(i) > 109){
        count++
      }
    }
    return `${count}/${s.length}`
  }