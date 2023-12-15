export function getScore(totalEntries: number, rightEntries: number) {
  const score = Number(((rightEntries / totalEntries) * 100).toFixed());
  return score;
}
