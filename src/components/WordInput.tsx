import { useEffect, useRef, useState } from 'react';
import { VerbForm, WrongAnswer } from '../types';

interface Props {
  verbId: number;
  correctValue: string;
  submitted: boolean;
  getWrongAnswers: (wrongAnswer: WrongAnswer) => void;
  verbForm: VerbForm;
  getStartTime?: () => void;
}

export default function WordInput({
  verbId,
  correctValue,
  submitted,
  getWrongAnswers,
  verbForm,
  getStartTime,
}: Props) {
  const [value, setValue] = useState('');
  const [style, setStyle] = useState({});
  const ref = useRef<any>(null);

  useEffect(() => {
    if (value.length > 0) {
      if (ref.current === null) {
        getStartTime && getStartTime();
        ref.current = '';
      }
    }
  }, [value]);

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
      onChange={(e) => setValue(e.target.value)}
      value={value}
      style={style}
    />
  );
}
