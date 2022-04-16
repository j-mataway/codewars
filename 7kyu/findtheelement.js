function gimme (triplet) {
    const arr = triplet.slice()
    triplet.sort((a,b) => a - b)
    const x = triplet[1]
    return arr.indexOf(x)
    }