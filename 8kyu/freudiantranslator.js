function toFreud(string) {
    let arr = string.split(" ")
    let result = ""
    if (arr[0] === ""){
  result = ""}
    else{for(i = 0; i < arr.length; i++){
      arr[i] = "sex"
    }
    result = arr.join(" ")
        } 
  return result;
  }