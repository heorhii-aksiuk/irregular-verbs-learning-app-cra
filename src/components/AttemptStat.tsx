import React from 'react';
import { Stat } from '../types';

interface Props {
  statistic: Stat;
}

export default function AttemptStat({ statistic }: Props) {
  return (
    <div>
      <p>Date: {statistic.date}</p>
      <p>Time: {statistic.time}</p>
      <p>
        Verbs: {statistic.verbsToLearnCount}/{statistic.wrongAnswersVerbsCount}
      </p>
      <p>
        Words: {statistic.wordsToLearnCount}/{statistic.wrongAnswersWordsCount}
      </p>
      <p>Score by verbs: {statistic.verbsScore}</p>
      <p>Score by words: {statistic.wordsScore}</p>
      {/* {statistic.resultWrongAnswersList.map((result))} */}
    </div>
  );
}
