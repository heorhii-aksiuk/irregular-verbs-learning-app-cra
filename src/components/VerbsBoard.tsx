import { VerbsList, WrongAnswer } from '../types';
import VerbItem from './VerbItem';

interface Props {
  verbs: VerbsList;
  submitted: boolean;
  getWrongAnswers: (wrongAnswer: WrongAnswer) => void;
}

export default function VerbsBoard(props: Props) {
  const { verbs, submitted, getWrongAnswers } = props;
  return (
    <ol>
      {verbs.map((verb) => (
        <VerbItem
          key={verb.id}
          verb={verb}
          getWrongAnswers={getWrongAnswers}
          submitted={submitted}
        />
      ))}
    </ol>
  );
}
