import { useEffect, useState } from 'react';
import { getAttemptStat, shuffledVerbsList as verbs } from './utils';
import { Stat, WrongAnswer, WrongAnswersList } from './types';
import AppBar from './components/AppBar';
import VerbsBoard from './components/VerbsBoard';
import AttemptStat from './components/AttemptStat';
import { useLocalStorageState } from './utils/hooks';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [finishTime, setFinishTime] = useState<number | null>(null);
  const [attemptStat, setAttemptStat] = useState<Stat | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswersList>([]);
  const [savedStat, setSavedStat] = useLocalStorageState('statistic');

  // useEffect(() => {
  //   setSavedStat(setSavedStat);
  // }, []);

  console.log(savedStat);

  useEffect(() => {
    if (
      submitted &&
      startTime !== null &&
      finishTime !== null &&
      wrongAnswers.length > 0
    ) {
      const stat = getAttemptStat(verbs, wrongAnswers, startTime, finishTime);
      setAttemptStat(stat);
      setSavedStat(attemptStat);
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
    <main className="bg-gray-700 bg-app-bg-image bg-contain bg-fixed">
      <AppBar />
      <div className="pt-14 max-w-3xl mx-auto w-fit">
        <form
          onKeyDown={getStartTime}
          className="justify-center w-fit"
          spellCheck={false}
        >
          <VerbsBoard
            verbs={verbs}
            getWrongAnswers={getWrongAnswers}
            submitted={submitted}
          />
          <button
            className="bg-sky-600 px-5 py-1 my-4 rounded font-semibold hover:bg-sky-700"
            onClick={onSubmit}
            type="button"
          >
            Check
          </button>
          {attemptStat && <AttemptStat statistic={attemptStat} />}
        </form>
      </div>
    </main>
  );
}
