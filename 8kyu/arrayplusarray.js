function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, int) => acc + int, 0) + arr2.reduce((acc, int) => acc + int, 0)
  }