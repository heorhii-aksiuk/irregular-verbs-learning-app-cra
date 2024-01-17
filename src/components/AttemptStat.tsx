import React from 'react';
import { Stat } from '../types';

interface Props {
  statistic: Stat;
}

export default function AttemptStat({ statistic }: Props) {
  return (
    <div className="font-semibold bg-gray-400/95 rounded p-2">
      <h2 className="text-lg underline">Attempt statistic</h2>
      <p>Date: {statistic.date}</p>
      <p>Time: {statistic.time}</p>
      <p>Verbs total: {statistic.verbsToLearnCount}</p>
      <p>Verbs wrong answers: {statistic.wrongAnswersVerbsCount}</p>
      <p>Words total: {statistic.wordsToLearnCount}</p>
      <p>Words wrong answers: {statistic.wrongAnswersWordsCount}</p>
      <p>Score by verbs: {statistic.verbsScore}/100</p>
      <p>Score by words: {statistic.wordsScore}/100</p>
      {/* {statistic.resultWrongAnswersList.map((result))} */}
    </div>
  );
}
