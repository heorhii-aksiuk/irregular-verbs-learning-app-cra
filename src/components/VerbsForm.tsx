import React, { ReactNode } from 'react';

interface Props {
  onKeyDown: () => void;
  spellCheck: boolean;
  children: ReactNode;
}

export default function VerbsForm({ onKeyDown, spellCheck, children }: Props) {
  return (
    <form
      onKeyDown={onKeyDown}
      className="justify-center w-fit"
      spellCheck={spellCheck}
    >
      {children}
    </form>
  );
}
