/* import words from '../data.json';
import {
  getScore,
  getFormattedDate,
  getResultWrongAnswersList,
  getTime,
} from '.';
import { wordFormsCount } from '../constants';
import { AttemptStatistic, WrongAnswersList } from '../types';

export default function getAttemptStatistic(
  wrongAnswersList: WrongAnswersList,
  attemptStartTime: number,
  attemptFinishTime: number,
): AttemptStatistic {
  const date = getFormattedDate(attemptFinishTime);
  const time = getTime(attemptStartTime, attemptFinishTime);
  const wordsToLearnCount = words.length;
  const totalWordsToLearnCount = wordsToLearnCount * wordFormsCount;
  const totalWrongAnswersWordsCount = wrongAnswersList.length;
  const totalScore = getScore(
    totalWordsToLearnCount,
    totalWrongAnswersWordsCount,
  );
  const resultWrongAnswersList = getResultWrongAnswersList(
    words,
    wrongAnswersList,
  ); //not ready
  const wrongAnswersWordsCount = resultWrongAnswersList.length;
  const score = getScore(wordsToLearnCount, wrongAnswersWordsCount);

  return {
    date,
    time,
    wordsToLearnCount,
    totalWordsToLearnCount,
    wrongAnswersWordsCount,
    score,
    totalWrongAnswersWordsCount,
    totalScore,
    resultWrongAnswersList,
  };
}
 */

export default function getAttemptStatistic() {
  return 0;
}
