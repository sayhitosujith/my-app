// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ADMIN heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/ADMIN/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders email input', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/Enter Email Address/i);
  expect(emailInput).toBeInTheDocument();
});

test('renders password input', () => {
  render(<App />);
  const passwordInput = screen.getByPlaceholderText(/Enter Password/i);
  expect(passwordInput).toBeInTheDocument();
});

test('renders practice city select', () => {
  render(<App />);
  const selectElement = screen.getByLabelText(/Select Practice City/i);
  expect(selectElement).toBeInTheDocument();
});
