/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './Home';

test('Renders home view', () => {
  render(<Home />);
  const home = screen.getByText(/Home page/i);
  expect(home).toBeInTheDocument();
});
