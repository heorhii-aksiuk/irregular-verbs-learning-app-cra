import { useEffect, useState } from 'react';
import { getAttemptStat, shuffledVerbsList as verbs } from './utils';
import { Stat, WrongAnswer, WrongAnswersList } from './types';
import AppBar from './components/AppBar';
import VerbsBoard from './components/VerbsBoard';
import AttemptStat from './components/AttemptStat';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [finishTime, setFinishTime] = useState<number | null>(null);
  const [attemptStat, setAttemptStat] = useState<Stat | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswersList>([]);

  useEffect(() => {
    if (
      submitted &&
      startTime !== null &&
      finishTime !== null &&
      wrongAnswers.length > 0
    ) {
      const stat = getAttemptStat(verbs, wrongAnswers, startTime, finishTime);
      setAttemptStat(stat);
    }
  }, [submitted, wrongAnswers]);

  const getStartTime = () => {
    if (startTime !== null) {
      return;
    }
    setStartTime(Date.now());
  };

  const getWrongAnswers = (wrongAnswer: WrongAnswer) => {
    setWrongAnswers((prev: WrongAnswersList) => [...prev, wrongAnswer]);
  };

  const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setFinishTime(Date.now());
    setSubmitted(true);
  };

  console.log(attemptStat);

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
            verbs={verbs}
            getWrongAnswers={getWrongAnswers}
            submitted={submitted}
          />
          <button onClick={onSubmit} type="button">
            Check
          </button>
          {attemptStat && <AttemptStat statistic={attemptStat} />}
        </form>
      </div>
    </>
  );
}
