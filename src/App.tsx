import { useEffect, useState } from 'react';
import WordInput from './components/WordInput';
import { getResultWrongAnswersList, shuffledWordsList } from './utils';
import WordTranslation from './components/WordTranslation';
import {
  WordFrom,
  // WordsList,
  WrongAnswer,
  WrongAnswerWord,
  WrongAnswerWordsList,
  WrongAnswersList,
} from './types';

// import data from './data.json';

export default function App() {
  // const [words, setWords] = useState<WordsList>([]);
  const [submitted, setSubmitted] = useState(false);
  const [wrongAnswersList, setWrongAnswersList] = useState<WrongAnswersList>(
    [],
  );

  const [resultWrongAnswersList, setResultWrongAnswersList] =
    useState<WrongAnswerWordsList>([]);

  const getWrongAnswers = (wrongAnswer: WrongAnswer) => {
    setWrongAnswersList((prev: WrongAnswersList) => [...prev, wrongAnswer]);
  };

  useEffect(() => {
    if (submitted && wrongAnswersList.length > 0) {
      const result = getResultWrongAnswersList(
        shuffledWordsList,
        wrongAnswersList,
      );
      setResultWrongAnswersList(result);
    }
  }, [submitted, wrongAnswersList]);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header>Irregular verbs learning app</header>
      <div style={{ display: 'flex' }}>
        <form style={{ margin: '0 auto' }} spellCheck={false}>
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

          {resultWrongAnswersList.length > 0 && (
            <ol>
              {resultWrongAnswersList.map((word, index: number) => (
                <li key={index}>
                  {word.translation} {word.infinitiveWrongAnswer}{' '}
                  {word.infinitive} {word.pastSimpleWrongAnswer}{' '}
                  {word.pastSimple} {word.pastParticleWrongAnswer}{' '}
                  {word.pastParticle}
                </li>
              ))}
            </ol>
          )}
        </form>
      </div>
    </>
  );
}
