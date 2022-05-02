  const twoHighest = a => a
  .filter((e, i) => i === a.lastIndexOf(e))
  .sort((x, y) => y - x)
  .slice(0, 2);