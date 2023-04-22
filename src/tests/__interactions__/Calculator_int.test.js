import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../../components/Calculator';

test('display shows the clicked number', () => {
  const { queryAllByText } = render(<Calculator />);
  const button = queryAllByText('7')[0];
  fireEvent.click(button);
  expect(queryAllByText('7')[1]).toBeInTheDocument();
});
