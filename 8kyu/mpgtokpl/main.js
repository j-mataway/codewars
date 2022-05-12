function converter (mpg) {
    const conversion = 1.609344/4.54609188
    const kpl = mpg*conversion
    return parseFloat(kpl.toFixed(2))
  }
  
  