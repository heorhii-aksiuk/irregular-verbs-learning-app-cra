import { useEffect, useState } from 'react';
import WordInput from './components/WordInput';
import { getAttemptStatistic, shuffledWordsList } from './utils';
import WordTranslation from './components/WordTranslation';
import { VerbForm, WrongAnswer, WrongAnswersList } from './types';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [wrongAnswersList, setWrongAnswersList] = useState<WrongAnswersList>(
    [],
  );
  const [attemptStatistic, setAttemptStatistic] = useState({});

  const getWrongAnswers = (wrongAnswer: WrongAnswer) => {
    setWrongAnswersList((prev: WrongAnswersList) => [...prev, wrongAnswer]);
  };

  useEffect(() => {
    if (submitted && wrongAnswersList.length > 0) {
      const statistic = getAttemptStatistic(
        shuffledWordsList,
        wrongAnswersList,
        Date.now(),
        Date.now() + 1000,
      );
      setAttemptStatistic(statistic);
    }
  }, [submitted, wrongAnswersList]);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  console.log(attemptStatistic);

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
                    verbForm={VerbForm.infinitive}
                  />
                  <WordInput
                    wordId={word.id}
                    correctValue={word.pastSimple}
                    submitted={submitted}
                    getWrongAnswers={getWrongAnswers}
                    verbForm={VerbForm.pastSimple}
                  />
                  <WordInput
                    wordId={word.id}
                    correctValue={word.pastParticle}
                    submitted={submitted}
                    getWrongAnswers={getWrongAnswers}
                    verbForm={VerbForm.pastParticle}
                  />
                </div>
              </li>
            ))}
          </ol>
          <button onClick={onSubmit} type="button">
            Check
          </button>

          {/* {resultWrongAnswersList.length > 0 && (
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
          )} */}
        </form>
      </div>
    </>
  );
}
