const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');

//doing without regex