import React from 'react';
import { Stat } from '../types';

interface Props {
  stat: Stat;
}

export default function AttemptStat({ stat }: Props) {
  console.log(stat);

  return (
    <div className="font-semibold bg-gray-400/95 rounded p-2">
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
          {/* <ul>
            {stat.resultWrongAnswersList.map((item) => {
              return (
                <li key={item.id}>
                  <p>{item.id}</p>
                  <p>{item.translation}</p>
                  <p>{item.infinitiveWrong}</p>
                  <p>{item.infinitive}</p>
                  <p>{item.pastSimpleWrong}</p>
                  <p>{item.pastSimple}</p>
                  <p>{item.pastParticleWrong}</p>
                  <p>{item.pastParticle}</p>
                </li>
              );
            })}
          </ul> */}
          <table className="table-auto border">
            <thead className="border">
              <tr className="border">
                <th className="border" colSpan={10}>
                  Verbs mistakes
                </th>
              </tr>
            </thead>
            <thead className="border">
              <tr className="border">
                <th className="border" colSpan={2}>
                  /
                </th>
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
                <td className="border">Id</td>
                <td className="border">Translation</td>
                <td className="border">infinitiveWrong</td>
                <td className="border">infinitive</td>
                <td className="border">pastSimpleWrong</td>
                <td className="border">pastSimple</td>
                <td className="border">pastParticleWrong</td>
                <td className="border">pastParticle</td>
                <td className="border">Part</td>
                <td className="border">Total verb mistake</td>
              </tr>
              {stat.resultWrongAnswersList.map((item) => {
                return (
                  <tr className="border">
                    <td className="border">{item.id}</td>
                    <td className="border">{item.translation}</td>
                    <td className="border line-through">
                      {item.infinitiveWrong}
                    </td>
                    <td className="border">{item.infinitive}</td>
                    <td className="border line-through">
                      {item.pastSimpleWrong}
                    </td>
                    <td className="border">{item.pastSimple}</td>
                    <td className="borderline-through">
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
