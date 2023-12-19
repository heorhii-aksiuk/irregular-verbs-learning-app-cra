import { Verb, VerbForm, WrongAnswer } from '../types';
import WordTranslation from './WordTranslation';
import WordInput from './WordInput';

interface Props {
  verb: Verb;
  submitted: boolean;
  getWrongAnswers: (wrongAnswer: WrongAnswer) => void;
}

export default function VerbItem({ verb, submitted, getWrongAnswers }: Props) {
  return (
    <li>
      <WordTranslation value={verb.translation} />
      <WordInput
        verbId={verb.id}
        correctValue={verb.infinitive}
        submitted={submitted}
        getWrongAnswers={getWrongAnswers}
        verbForm={VerbForm.infinitive}
      />
      <WordInput
        verbId={verb.id}
        correctValue={verb.pastSimple}
        submitted={submitted}
        getWrongAnswers={getWrongAnswers}
        verbForm={VerbForm.pastSimple}
      />
      <WordInput
        verbId={verb.id}
        correctValue={verb.pastParticle}
        submitted={submitted}
        getWrongAnswers={getWrongAnswers}
        verbForm={VerbForm.pastParticle}
      />
    </li>
  );
}
