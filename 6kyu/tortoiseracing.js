function race(v1, v2, g) {
    let timeInSeconds =  3600*g/(v2 - v1)
    const h = Math.floor(timeInSeconds/3600)
    const m = Math.floor(timeInSeconds/60%60)
    const s = Math.floor(timeInSeconds%60)
    return v1 >= v2 ? null : [h, m, s]
  }