export default function getScore(totalEntries: number, rightEntries: number) {
  const score = 100 - Number(((rightEntries / totalEntries) * 100).toFixed());
  return score;
}
