import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <section className="pt-14 max-w-3xl mx-auto w-fit">{children}</section>
  );
}
