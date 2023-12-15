export default function millisecondsToTime(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const remainingMilliseconds = milliseconds % 1000;
  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;

  const timeFormat = `${String(hours).padStart(2, '0')}:${String(
    remainingMinutes,
  ).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}.${String(
    Math.floor(remainingMilliseconds / 10),
  ).padStart(2, '0')}`;

  return timeFormat;
}
