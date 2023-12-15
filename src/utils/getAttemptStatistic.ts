import {
  getScore,
  getFormattedDate,
  getResultWrongAnswersList,
  getTime,
} from '.';
import { wordFormsCount } from '../constants';
import { AttemptStatistic, VerbsList, WrongAnswersList } from '../types';

export default function getAttemptStatistic(
  verbs: VerbsList,
  wrongAnswersList: WrongAnswersList,
  attemptStartTime: number,
  attemptFinishTime: number,
): AttemptStatistic {
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
