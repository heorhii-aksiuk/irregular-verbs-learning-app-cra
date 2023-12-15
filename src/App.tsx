import { useState } from 'react';
import WordInput from './components/WordInput';
import { shuffledWordsList } from './utils';
import WordTranslation from './components/WordTranslation';
import { WordFrom, WrongAnswer, WrongAnswersList } from './types';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [wrongAnswersList, setWrongAnswersList] = useState<WrongAnswersList>(
    [],
  );

  const getWrongAnswers = (wrongAnswer: WrongAnswer) => {
    setWrongAnswersList((prev: WrongAnswersList) => [...prev, wrongAnswer]);
  };

  console.log(wrongAnswersList);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header>Irregular verbs learning app</header>
      <form spellCheck={false}>
        <ol>
          {shuffledWordsList.map((word) => (
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

        {wrongAnswersList.length > 0 && (
          <ol>
            {wrongAnswersList.map((word: WrongAnswer, index: number) => (
              <li key={index}>{word}</li>
            ))}
          </ol>
        )}
      </form>
    </>
  );
}
