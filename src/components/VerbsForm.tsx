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
      className="justify-center w-fit mb-4 pl-8 pr-2 bg-gray-300/40 rounded"
      spellCheck={spellCheck}
    >
      {children}
    </form>
  );
}
