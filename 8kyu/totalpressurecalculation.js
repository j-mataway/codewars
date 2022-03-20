solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let kelvin = temp + 273.15
    let mass = givenMass1/molarMass1 + givenMass2/molarMass2
    let r = .082
    return (mass*r*kelvin)/volume
  }



