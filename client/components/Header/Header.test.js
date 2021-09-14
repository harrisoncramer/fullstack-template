/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from './Header';

test('Renders header', () => {
  render(<Header />);
  const header = screen.getByText(/This is the header/i);
  expect(header).toBeInTheDocument();
});
