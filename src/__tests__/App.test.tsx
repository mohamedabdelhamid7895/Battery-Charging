import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { useBatteryData } from '../hooks/useBatteryData';

jest.mock('./hooks/useBatteryData');

const mockData = {
  chargingStates: [
    {
      date: "2024-03-15T10:00:00Z",
      chargingLevel: 50,
      internalEventId: 1
    },
    {
      date: "2024-03-15T11:00:00Z",
      chargingLevel: 60,
      internalEventId: 2
    }
  ]
};

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    (useBatteryData as jest.Mock).mockReturnValue({
      loading: true,
      data: null,
      error: null,
      refetch: jest.fn()
    });

    render(<App />);
    expect(screen.getByLabelText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const error = new Error('Failed to fetch data');
    (useBatteryData as jest.Mock).mockReturnValue({
      loading: false,
      data: null,
      error,
      refetch: jest.fn()
    });

    render(<App />);
    expect(screen.getByText(error.message)).toBeInTheDocument();
  });

  it('renders battery data', () => {
    (useBatteryData as jest.Mock).mockReturnValue({
      loading: false,
      data: mockData,
      error: null,
      refetch: jest.fn()
    });

    render(<App />);
    expect(screen.getByText('Battery Charging Monitor')).toBeInTheDocument();
    expect(screen.getByText('60%')).toBeInTheDocument();
  });

  it('handles refresh button click', async () => {
    const refetchMock = jest.fn();
    (useBatteryData as jest.Mock).mockReturnValue({
      loading: false,
      data: mockData,
      error: null,
      refetch: refetchMock
    });

    render(<App />);
    
    const refreshButton = screen.getByLabelText('Refresh data');
    fireEvent.click(refreshButton);

    await waitFor(() => {
      expect(refetchMock).toHaveBeenCalledTimes(1);
    });
  });
});