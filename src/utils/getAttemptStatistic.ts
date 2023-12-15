import words from './getShuffleData';
import { getTime } from './getTime';
import { getFormattedDate } from './getFormattedDate';
import { wordForms } from '../constants';
import { AttemptStatistic, WrongAnswersList } from '../types';
import { getScore } from './getScore';
import { getResultWrongAnswersList } from './getResultWrongAnswersList';

export default function getAttemptStatistic(
  wrongAnswersList: WrongAnswersList,
  attemptStartTime: number,
  attemptFinishTime: number,
): AttemptStatistic {
  const date = getFormattedDate(attemptFinishTime);
  const time = getTime(attemptStartTime, attemptFinishTime);
  const wordsToLearnCount = words.length;
  const totalWordsToLearnCount = wordsToLearnCount * wordForms;
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
