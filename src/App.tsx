import { useEffect, useState } from 'react';
import { getAttemptStat, getTime, shuffledVerbsList as verbs } from './utils';
import { useLocalStorageState } from './utils/hooks';
import AppBar from './components/AppBar';
import AppContainer from './components/AppContainer';
import Section from './components/Section';
import VerbsBoard from './components/VerbsBoard';
import VerbsForm from './components/VerbsForm';
import Button from './components/Button';
import AttemptStat from './components/AttemptStat';
import Footer from './components/Footer';
import { Stat, WrongAnswer, WrongAnswersList } from './types';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [finishTime, setFinishTime] = useState<number | null>(null);
  const [attemptStat, setAttemptStat] = useState<Stat | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswersList>([]);
  const [savedStat, setSavedStat] = useLocalStorageState('statistic');
  const [timer, setTimer] = useState<string | null>(null);

  console.log(timer);

  useEffect(() => {
    if (startTime === null) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setTimer(getTime(startTime, Date.now()));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [startTime, timer]);

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

  return (
    <AppContainer>
      <AppBar timer={timer} />
      <Section>
        <VerbsForm onKeyDown={getStartTime} spellCheck={false}>
          <VerbsBoard
            verbs={verbs}
            getWrongAnswers={getWrongAnswers}
            submitted={submitted}
          />
          <Button onClick={onSubmit} type="button" content="Check" />
        </VerbsForm>
        {attemptStat && <AttemptStat stat={attemptStat} />}
      </Section>
      <Footer />
    </AppContainer>
  );
}
