/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { screen, render } from '@testing-library/react';
import About from './About';

test('Renders about view', () => {
  render(<About />);
  const about = screen.getByText(/About page/i);
  expect(about).toBeInTheDocument();
});
