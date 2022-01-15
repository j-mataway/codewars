function spinningRings(innerMax, outerMax) {
    let inner = innerMax,
        outer = 1,
        i = 1
    for (i = 1; inner != outer; i++){
      inner === 0 ? inner = innerMax : inner -= 1
      outer === outerMax? outer = 0 : outer += 1
    }
      return i
    };