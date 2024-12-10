import { ChargingData } from '../types/battery';
import { mockChargingData } from '../data/mockData';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IS_DEVELOPMENT = import.meta.env.DEV;

export const fetchBatteryData = async (): Promise<ChargingData> => {
  try {
    if (IS_DEVELOPMENT) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockChargingData;
    }

    const response = await fetch(`${API_BASE_URL}/battery/charging-states`);
    
    if (!response.ok) {
      throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to fetch battery data');
  }
};