function filter_list(l) {
    const numbers = l.filter(nums => typeof nums === "number")
    return numbers
  }