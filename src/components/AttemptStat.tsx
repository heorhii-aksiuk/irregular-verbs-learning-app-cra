import React from 'react';
import { Stat } from '../types';

interface Props {
  stat: Stat;
}

export default function AttemptStat({ stat }: Props) {
  return (
    <div className="font-semibold bg-gray-300/40 rounded p-4 w-fill mb-2">
      <div className="bg-gray-400/80 rounded px-4 py-2 w-60 mx-auto flex flex-col justify-between">
        {/* TODO: Table */}
        <h2 className="text-lg text-center">Attempt stat</h2>
        <p>
          Date: <span className="float-end">{stat.date}</span>
        </p>
        <p>
          Time: <span className="float-end">{stat.time}</span>
        </p>
        <p>
          Verbs total:{' '}
          <span className="float-end">{stat.verbsToLearnCount}</span>
        </p>
        <p>
          Verbs wrong answers:{' '}
          <span className="float-end">{stat.wrongAnswersVerbsCount}</span>
        </p>
        <p>
          Words total:{' '}
          <span className="float-end">{stat.wordsToLearnCount}</span>
        </p>
        <p>
          Words wrong answers:{' '}
          <span className="float-end">{stat.wrongAnswersWordsCount}</span>
        </p>
        <p>
          Score by verbs:{' '}
          <span className="float-end">{stat.verbsScore}/100</span>
        </p>
        <p>
          Score by words:{' '}
          <span className="float-end">{stat.wordsScore}/100</span>
        </p>
      </div>

      {stat.resultWrongAnswersList.length >= 0 && (
        <>
          <table className="table-auto border-2 border-gray-300/30 mt-4 bg-gray-400/80 mx-auto">
            <thead className="border-2 border-gray-300/30">
              <tr className="border-2 border-gray-300/30">
                <th className="border-2 border-gray-300/30" colSpan={10}>
                  Verbs mistakes
                </th>
              </tr>
            </thead>
            <thead className="border-2 border-gray-300/30">
              <tr className="border-2 border-gray-300/30">
                <th className="border-2 border-gray-300/30" colSpan={2}></th>
                <th className="border-2 border-gray-300/30" colSpan={2}>
                  &#8544;
                </th>
                <th className="border-2 border-gray-300/30" colSpan={2}>
                  &#8545;
                </th>
                <th className="border-2 border-gray-300/30" colSpan={2}>
                  &#8546;
                </th>
                <th className="border-2 border-gray-300/30" colSpan={2}>
                  Info
                </th>
              </tr>
            </thead>
            <tbody className="border-2 border-gray-300/30">
              <tr className="border-2 border-gray-300/30">
                <td className="border-2 border-gray-300/30 text-center">ID</td>
                <td className="border-2 border-gray-300/30 min-w-16 text-center">
                  Translation
                </td>
                <td className="border-2 border-gray-300/30 min-w-16 text-center">
                  ❌
                </td>
                <td className="border-2 border-gray-300/30 min-w-16 text-center">
                  ✅
                </td>
                <td className="border-2 border-gray-300/30 min-w-16 text-center">
                  ❌
                </td>
                <td className="border-2 border-gray-300/30 min-w-16 text-center">
                  ✅
                </td>
                <td className="border-2 border-gray-300/30 min-w-16 text-center">
                  ❌
                </td>
                <td className="border-2 border-gray-300/30 min-w-16 text-center">
                  ✅
                </td>
                <td className="border-2 border-gray-300/30 min-w-10 text-center">
                  Part
                </td>
                <td className="border-2 border-gray-300/30 min-w-10 text-center">
                  Total
                </td>
              </tr>
              {stat.resultWrongAnswersList.map((item) => {
                return (
                  <tr key={item.id} className="border-2 border-gray-300/30">
                    <td className="border-2 border-gray-300/30">{item.id}</td>
                    <td className="border-2 border-gray-300/30 whitespace-nowrap">
                      {item.translation}
                    </td>
                    <td className="border-2 border-gray-300/30 line-through whitespace-nowrap max-w-24 overflow-hidden text-ellipsis">
                      {item.infinitiveWrong}
                    </td>
                    <td className="border-2 border-gray-300/30">
                      {item.infinitive}
                    </td>
                    <td className="border-2 border-gray-300/30 line-through whitespace-nowrap max-w-24 overflow-hidden text-ellipsis">
                      {item.pastSimpleWrong}
                    </td>
                    <td className="border-2 border-gray-300/30">
                      {item.pastSimple}
                    </td>
                    <td className="border-2 border-gray-300/30 line-through whitespace-nowrap max-w-24 overflow-hidden text-ellipsis">
                      {item.pastParticleWrong}
                    </td>
                    <td className="border-2 border-gray-300/30 ">
                      {item.pastParticle}
                    </td>
                    <td className="border-2 border-gray-300/30">{'...'}</td>
                    <td className="border-2 border-gray-300/30">{'...'}</td>
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
