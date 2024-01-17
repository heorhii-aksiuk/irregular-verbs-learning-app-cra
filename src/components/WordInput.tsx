import { useEffect, useState } from 'react';
import { VerbForm, WrongAnswer } from '../types';

interface Props {
  verbId: number;
  verbForm: VerbForm;
  correctValue: string;
  submitted: boolean;
  getWrongAnswers: (wrongAnswer: WrongAnswer) => void;
}

export default function WordInput(props: Props) {
  const { verbId, correctValue, submitted, getWrongAnswers, verbForm } = props;
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
      getWrongAnswers({ id: verbId, verbForm, correctValue, value });
      setValue((prev) => `${prev}>${correctValue}`);
    }
  }, [submitted]);

  return (
    <input
      className={`${
        value === '' ? 'bg-gray-300/80' : 'bg-gray-400/95'
      } w-48 rounded font-semibold pl-2 focus:outline-none focus:ring-2 focus:ring-black/90 focus:bg-white/95`}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      style={style}
    />
  );
}
