import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <section>
      <h1>Test</h1>
      {children}
    </section>
  );
}
