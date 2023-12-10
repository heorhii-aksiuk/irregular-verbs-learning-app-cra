import React, { useEffect, useId } from 'react';
import { useToggle } from '../hooks';

interface Props {
  onSwitch: (isSwitched: boolean) => void;
  current: boolean;
}

export default function ThemeSwitch({ onSwitch, current }: Props) {
  const [theme, toggleTheme] = useToggle(current);
  const id = useId();

  useEffect(() => {
    onSwitch(current);
  }, [onSwitch, current]);

  return (
    <input
      onChange={() => toggleTheme()}
      type="checkbox"
      id={id}
      aria-label="Theme switch"
      checked={theme}
    />
  );
}
