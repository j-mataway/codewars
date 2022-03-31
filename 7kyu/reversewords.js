function reverseWords(str) {
    let arr = str.split(' ')
    let wordArr = []
    let splitEle = []
    for(i = 0; i < arr.length; i++){
      splitEle = arr[i].split('') 
      wordArr[i] = splitEle.reverse().join('')
    }
    return wordArr.join(' ')
  }