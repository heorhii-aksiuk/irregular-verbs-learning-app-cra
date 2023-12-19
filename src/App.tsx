import { useEffect, useState } from 'react';
import { getAttemptStatistic, shuffledVerbsList } from './utils';
import { Statistic, WrongAnswer, WrongAnswersList } from './types';
import VerbsBoard from './components/VerbsBoard';
import AppBar from './components/AppBar';
import AttemptStatistic from './components/AttemptStatistic';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [attemptStatistic, setAttemptStatistic] = useState<Statistic | null>(
    null,
  );
  const [startTime, setStartTime] = useState<number | null>(null);
  const [finishTime, setFinishTime] = useState<number | null>(null);
  const [wrongAnswersList, setWrongAnswersList] = useState<WrongAnswersList>(
    [],
  );

  const getStartTime = () => {
    if (startTime !== null) {
      return;
    }
    setStartTime(Date.now());
  };

  const getWrongAnswers = (wrongAnswer: WrongAnswer) => {
    setWrongAnswersList((prev: WrongAnswersList) => [...prev, wrongAnswer]);
  };

  useEffect(() => {
    if (
      submitted &&
      startTime !== null &&
      finishTime !== null &&
      wrongAnswersList.length > 0
    ) {
      const statistic = getAttemptStatistic(
        shuffledVerbsList,
        wrongAnswersList,
        startTime,
        finishTime,
      );
      setAttemptStatistic(statistic);
    }
  }, [submitted, wrongAnswersList]);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setFinishTime(Date.now());
    setSubmitted(true);
  };

  console.log(attemptStatistic);

  return (
    <>
      <AppBar />
      <div style={{ display: 'flex' }}>
        <form
          onKeyDown={getStartTime}
          style={{ margin: '0 auto' }}
          spellCheck={false}
        >
          <VerbsBoard
            verbs={shuffledVerbsList}
            getWrongAnswers={getWrongAnswers}
            submitted={submitted}
          />
          <button onClick={onSubmit} type="button">
            Check
          </button>
          {attemptStatistic && (
            <AttemptStatistic statistic={attemptStatistic} />
          )}
        </form>
      </div>
    </>
  );
}
