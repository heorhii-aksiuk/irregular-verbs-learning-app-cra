import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AppContainer({ children }: Props) {
  return (
    <main className="bg-gray-700 bg-app-bg-image bg-contain bg-fixed">
      {children}
    </main>
  );
}
