import { useState, useEffect } from 'react';
import { ChargingData } from '../types/battery';
import { fetchBatteryData } from '../api/batteryApi';

export const useChargingData = () => {
  const [data, setData] = useState<ChargingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchBatteryData();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(new Error(`API Error: ${err.message}`));
        } else {
          setError(new Error('Failed to fetch data'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};