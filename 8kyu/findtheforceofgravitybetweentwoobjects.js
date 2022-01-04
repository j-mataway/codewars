solution = (val, unit) => {
    const kg ={
      kg: 1,
      g: .001,
      mg: .000001,
      μg: .000000001,
      lb: .453592
    }
    const m = {
      m : 1,
      cm: .01,
      mm: .001,
      μm: .000001,
      ft: .3048     
    }
    const obj1Mass = val[0] * kg[unit[0]]
    const obj2Mass = val[1] * kg[unit[1]]
    const distance = val[2] * m[unit[2]]
    const g = 6.67*10**-11
    return (g*(obj1Mass*obj2Mass))/distance**2
   };