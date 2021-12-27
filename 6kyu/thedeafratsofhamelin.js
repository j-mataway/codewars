var countDeafRats = function(town) {
    const [leftRats, rightRats] = town
      .replace(/[^O~P]/g, '')
      .split('P')
      .map(segment => segment.match(/.{2}/g) || []);
  
    return (
      leftRats.reduce((a, rat) => a + (rat === 'O~'), 0) +
      rightRats.reduce((a, rat) => a + (rat === '~O'), 0)
    );
  }