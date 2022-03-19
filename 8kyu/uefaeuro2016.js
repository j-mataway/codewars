function uefaEuro2016(teams, scores){
  const score1 = scores[0]
  const score2 = scores[1]
  const team1 = teams[0]
  const team2 = teams[1]

return score1 > score2 ? `At match ${team1} - ${team2}, ${team1} won!` : score1 < score2 ? `At match ${team1} - ${team2}, ${team2} won!` : `At match ${team1} - ${team2}, teams played draw.`
}


