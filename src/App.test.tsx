import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "App" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
