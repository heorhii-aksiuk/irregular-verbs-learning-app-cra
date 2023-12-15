import { useEffect, useState } from 'react';
import { WordFrom, WrongAnswer } from '../types';

interface Props {
  wordId: number;
  correctValue: string;
  submitted: boolean;
  getWrongAnswers: (wrongAnswer: WrongAnswer) => void;
  wordForm: WordFrom;
}

export default function WordInput({
  wordId,
  correctValue,
  submitted,
  getWrongAnswers,
  wordForm,
}: Props) {
  const [value, setValue] = useState('');
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (submitted !== true) {
      return;
    }

    if (correctValue === value) {
      setStyle({ backgroundColor: 'green' });
    } else {
      setStyle({ backgroundColor: 'red' });
      getWrongAnswers({ wordId, wordForm, correctValue, value });
      setValue((prev) => `${prev}>${correctValue}`);
    }
  }, [submitted]);

  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      value={value}
      style={style}
    />
  );
}
