function warnTheSheep(queue) {
    return queue[queue.length-1] === 'wolf' ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.reverse().indexOf('wolf')}! You are about to be eaten by a wolf!`
    }