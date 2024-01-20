import React from 'react';
import { Stat } from '../types';

interface Props {
  stat: Stat;
}

export default function AttemptStat({ stat }: Props) {
  console.log(stat);

  return (
    <div className="font-semibold bg-gray-300/40 rounded p-2">
      <h2 className="text-lg underline">Attempt statistic</h2>
      <p>Date: {stat.date}</p>
      <p>Time: {stat.time}</p>
      <p>Verbs total: {stat.verbsToLearnCount}</p>
      <p>Verbs wrong answers: {stat.wrongAnswersVerbsCount}</p>
      <p>Words total: {stat.wordsToLearnCount}</p>
      <p>Words wrong answers: {stat.wrongAnswersWordsCount}</p>
      <p>Score by verbs: {stat.verbsScore}/100</p>
      <p>Score by words: {stat.wordsScore}/100</p>
      {stat.resultWrongAnswersList.length >= 0 && (
        <>
          <table className="table-auto border mt-4">
            <thead className="border">
              <tr className="border">
                <th className="border" colSpan={10}>
                  Verbs mistakes
                </th>
              </tr>
            </thead>
            <thead className="border">
              <tr className="border">
                <th className="border" colSpan={2}></th>
                <th className="border" colSpan={2}>
                  &#8544;
                </th>
                <th className="border" colSpan={2}>
                  &#8545;
                </th>
                <th className="border" colSpan={2}>
                  &#8546;
                </th>
                <th className="border" colSpan={2}>
                  Info
                </th>
              </tr>
            </thead>
            <tbody className="border">
              <tr className="border">
                <td className="border text-center">ID</td>
                <td className="border min-w-16 text-center">Translation</td>
                <td className="border min-w-16 text-center">❌</td>
                <td className="border min-w-16 text-center">✅</td>
                <td className="border min-w-16 text-center">❌</td>
                <td className="border min-w-16 text-center">✅</td>
                <td className="border min-w-16 text-center">❌</td>
                <td className="border min-w-16 text-center">✅</td>
                <td className="border min-w-10 text-center">Part</td>
                <td className="border min-w-10 text-center">Total</td>
              </tr>
              {stat.resultWrongAnswersList.map((item) => {
                return (
                  <tr className="border">
                    <td className="border">{item.id}</td>
                    <td className="border whitespace-nowrap">
                      {item.translation}
                    </td>
                    <td className="border line-through whitespace-nowrap max-w-24 overflow-hidden text-ellipsis">
                      {item.infinitiveWrong}
                    </td>
                    <td className="border">{item.infinitive}</td>
                    <td className="border line-through whitespace-nowrap max-w-24 overflow-hidden text-ellipsis">
                      {item.pastSimpleWrong}
                    </td>
                    <td className="border">{item.pastSimple}</td>
                    <td className="border line-through whitespace-nowrap max-w-24 overflow-hidden text-ellipsis">
                      {item.pastParticleWrong}
                    </td>
                    <td className="border ">{item.pastParticle}</td>
                    <td className="border">{'...'}</td>
                    <td className="border">{'...'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
