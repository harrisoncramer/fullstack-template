/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { screen, render } from '@testing-library/react';
import Loader from './Loader';

test('Renders loader', () => {
  render(<Loader />);
  const loader = screen.getByTestId('loading-container');
  expect(loader).toBeInTheDocument();
});
