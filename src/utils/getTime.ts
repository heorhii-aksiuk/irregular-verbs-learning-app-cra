import { millisecondsToTime } from '.';

export function getTime(
  attemptStartTime: number,
  attemptFinishTime: number,
): string {
  const timeInMilliseconds = attemptFinishTime - attemptStartTime;
  const time = millisecondsToTime(timeInMilliseconds);
  return time;
}
