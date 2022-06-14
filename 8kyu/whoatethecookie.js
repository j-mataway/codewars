function cookie(x){
    let solution =  "Who ate the last cookie? It was "
    return typeof x === 'string'? solution + 'Zach!' : typeof x === 'number'? solution + 'Monica!': solution + 'the dog!'
  }