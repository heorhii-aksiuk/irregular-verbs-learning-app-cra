import React from 'react';

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  type: 'button' | 'submit';
  content: string;
}

export default function Button({ onClick, type, content }: Props) {
  return (
    <button
      className="bg-sky-600 px-5 py-1 mt-4 rounded font-semibold hover:bg-sky-700"
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}
