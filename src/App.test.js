import { render, screen } from '@testing-library/react';
import OtherApp from './OtherApp';

test('renders learn react link', () => {
  render(<OtherApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
