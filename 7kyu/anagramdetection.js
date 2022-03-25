// write the function isAnagram
var isAnagram = function(test, original) {
    const newTest = test.toLowerCase().split('').sort().join('')
    const newOriginal = original.toLowerCase().split('').sort().join('')
    console.log(newTest, newOriginal)
    return newTest === newOriginal
  };