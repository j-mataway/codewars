function remove (string) {
    let arr = string.split(' ')
    arr.forEach((word, i) => {
      let howMany = word.match(/!/g) === null ? 0 : word.match(/!/g).length
      if (howMany === 1){arr[i] = ''}
      })
      return arr.filter(Boolean).join(' ')
    }