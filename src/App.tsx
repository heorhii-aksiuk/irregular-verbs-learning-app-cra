import { useEffect, useState } from 'react';
import { getAttemptStat, shuffledVerbsList as verbs } from './utils';
import { Stat, WrongAnswer, WrongAnswersList } from './types';
import AppBar from './components/AppBar';
import VerbsBoard from './components/VerbsBoard';
import AttemptStat from './components/AttemptStat';
import { useLocalStorageState } from './utils/hooks';
import AppContainer from './components/AppContainer';
import Section from './components/Section';
import Button from './components/Button';
import VerbsForm from './components/VerbsForm';
import Footer from './components/Footer';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [finishTime, setFinishTime] = useState<number | null>(null);
  const [attemptStat, setAttemptStat] = useState<Stat | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswersList>([]);
  const [savedStat, setSavedStat] = useLocalStorageState('statistic');

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

  return (
    <AppContainer>
      <AppBar />
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
