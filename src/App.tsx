import { useState } from 'react';
import WordInput from './components/WordInput';
import words from './utils/getShuffleData';
import WordTranslation from './components/WordTranslation';
import { WordFrom, WrongAnswer } from './types';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);

  const getWrongAnswers = (wrongAnswer: WrongAnswer) => {
    setWrongAnswers((prev: WrongAnswer[]) => [...prev, wrongAnswer]);
  };

  console.log(wrongAnswers);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header>Irregular verbs learning app</header>
      <form spellCheck={false}>
        <ol>
          {words.map((word) => (
            <li key={word.id}>
              <div>
                <WordTranslation value={word.translation} />
                <WordInput
                  wordId={word.id}
                  correctValue={word.infinitive}
                  submitted={submitted}
                  getWrongAnswers={getWrongAnswers}
                  wordForm={WordFrom.infinitive}
                />
                <WordInput
                  wordId={word.id}
                  correctValue={word.pastSimple}
                  submitted={submitted}
                  getWrongAnswers={getWrongAnswers}
                  wordForm={WordFrom.pastSimple}
                />
                <WordInput
                  wordId={word.id}
                  correctValue={word.pastParticle}
                  submitted={submitted}
                  getWrongAnswers={getWrongAnswers}
                  wordForm={WordFrom.pastParticle}
                />
              </div>
            </li>
          ))}
        </ol>
        <button onClick={onSubmit} type="button">
          Check
        </button>

        {wrongAnswers.length > 0 && (
          <ol>
            {wrongAnswers.map((word: WrongAnswer, index: number) => (
              <li key={index}>{word}</li>
            ))}
          </ol>
        )}
      </form>
    </>
  );
}
