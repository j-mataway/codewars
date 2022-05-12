function doubleChar(str) {
    let arr = str.split('')
    let res = []
    arr.forEach((x) => {res.push(x) + res.push(x)})
    return res.join('')
  }
  