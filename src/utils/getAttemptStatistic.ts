import {
  getScore,
  getFormattedDate,
  getResultWrongAnswersList,
  getTime,
} from '.';
import { wordFormsCount } from '../constants';
import { Statistic, VerbsList, WrongAnswersList } from '../types';

export function getAttemptStatistic(
  verbs: VerbsList,
  wrongAnswersList: WrongAnswersList,
  attemptStartTime: number,
  attemptFinishTime: number,
): Statistic {
  const date = getFormattedDate(attemptFinishTime);
  const time = getTime(attemptStartTime, attemptFinishTime);
  const verbsToLearnCount = verbs.length;
  const wordsToLearnCount = verbsToLearnCount * wordFormsCount;
  const wrongAnswersWordsCount = wrongAnswersList.length;
  const wordsScore = getScore(wordsToLearnCount, wrongAnswersWordsCount);
  const resultWrongAnswersList = getResultWrongAnswersList(
    verbs,
    wrongAnswersList,
  );
  const wrongAnswersVerbsCount = resultWrongAnswersList.length;
  const verbsScore = getScore(verbsToLearnCount, wrongAnswersVerbsCount);

  return {
    date,
    time,
    verbsToLearnCount,
    wordsToLearnCount,
    wrongAnswersVerbsCount,
    verbsScore,
    wrongAnswersWordsCount,
    wordsScore,
    resultWrongAnswersList,
  };
}
