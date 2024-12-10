import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with correct accessibility attributes', () => {
    render(<LoadingSpinner />);
    
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByLabelText('Loading...')).toBeInTheDocument();
  });

  it('includes visually hidden text for screen readers', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('Loading...')).toHaveClass('sr-only');
  });
});