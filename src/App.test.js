import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/ResumeModal', () => () => <div data-testid="mock-resume-modal" />);

test('renders portfolio title and developer name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Jayasurya K/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
