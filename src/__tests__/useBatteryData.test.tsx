import { renderHook, act } from '@testing-library/react';
import { useBatteryData } from '../hooks/useBatteryData';
import { fetchBatteryData } from '../services/batteryApi';

jest.mock('../services/batteryApi');

describe('useBatteryData', () => {
  const mockData = {
    chargingStates: [
      {
        date: "2024-03-15T10:00:00Z",
        chargingLevel: 50,
        internalEventId: 1
      }
    ]
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data successfully', async () => {
    (fetchBatteryData as jest.Mock).mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useBatteryData());

    expect(result.current.loading).toBe(true);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it('handles error state', async () => {
    const error = new Error('Failed to fetch');
    (fetchBatteryData as jest.Mock).mockRejectedValueOnce(error);

    const { result } = renderHook(() => useBatteryData());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(error);
  });

  it('can refetch data', async () => {
    (fetchBatteryData as jest.Mock).mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useBatteryData());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    (fetchBatteryData as jest.Mock).mockResolvedValueOnce({
      ...mockData,
      chargingStates: [...mockData.chargingStates, { date: "2024-03-15T11:00:00Z", chargingLevel: 60, internalEventId: 2 }]
    });

    await act(async () => {
      result.current.refetch();
    });

    expect(fetchBatteryData).toHaveBeenCalledTimes(2);
  });
});