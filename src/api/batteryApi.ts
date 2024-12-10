import { ChargingData } from "../types/battery";
import { mockChargingData } from "../data/mockData";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
const IS_DEVELOPMENT = import.meta.env.DEV || false;

export const fetchBatteryData = async (): Promise<ChargingData> => {
  try {
    if (IS_DEVELOPMENT) {
      return mockChargingData;
    }

    const response = await fetch(`${API_BASE_URL}/battery/charging-states`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch battery data");
  }
};
