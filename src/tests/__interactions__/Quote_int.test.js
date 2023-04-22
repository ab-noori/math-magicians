import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // add this line
import Quote from '../../components/Quote';

test('renders quote component with loading state', () => {
  render(<Quote />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
