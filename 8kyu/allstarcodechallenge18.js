function strCount(str, letter){  
    let count = 0
      
      str.split('').forEach(ele => ele === letter ? count++: null)
      return count
    }