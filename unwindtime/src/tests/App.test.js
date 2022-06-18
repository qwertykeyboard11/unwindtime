import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
<<<<<<< HEAD
});
=======
});
>>>>>>> d2f03d92a2f6c4ca87a47e5b398ca336bd791086
