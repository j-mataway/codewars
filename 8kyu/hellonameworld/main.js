function hello(name) {
    if (name == '' || name == undefined){
      return 'Hello, World!'
    }else{
    return `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`
  }
  }

//returns hello world if input is empty or undefined, else returns hello (Name) with proper capitalization