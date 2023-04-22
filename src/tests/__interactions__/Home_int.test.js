import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../components/Home';

test('renders welcome text', () => {
  const { getByText } = render(<Home />);
  const welcomeText = getByText(/Welcome to our page!/i);
  expect(welcomeText).toBeInTheDocument();
});
