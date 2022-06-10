function isCoprime(x, y) {
    let xArr = []
    let yArr = []
    for(let i = 1; i <= x; i++){
      x % i === 0 ? xArr.push(i) : 0
    }
      for(let i = 1; i <= y; i++){
      y % i === 0 ? yArr.push(i) : 0
    }
    const primes = xArr.filter(e => yArr.includes(e))
    return !(primes.length > 1)
  }