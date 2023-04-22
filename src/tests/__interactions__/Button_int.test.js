import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

describe('Button', () => {
  test('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button className="test-class" text="Test Button" onClick={onClickMock} />);
    const button = screen.getByRole('button', { name: /test button/i });
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
