import { millisecondsToTime } from '.';

export default function getTime(
  attemptStartTime: number,
  attemptFinishTime: number,
): string {
  const timeInMilliseconds = attemptFinishTime - attemptStartTime;
  const time = millisecondsToTime(timeInMilliseconds);
  return time;
}
