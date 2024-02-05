import VerbItem from './VerbItem';
import { VerbsList, WrongAnswer } from '../types';

interface Props {
  verbs: VerbsList;
  submitted: boolean;
  getWrongAnswers: (wrongAnswer: WrongAnswer) => void;
}

export default function VerbsBoard(props: Props) {
  const { verbs, submitted, getWrongAnswers } = props;
  return (
    <ol className="list-decimal marker:text-white marker:font-semibold">
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
