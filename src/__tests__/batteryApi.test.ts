import "@testing-library/jest-dom";
import { fetchBatteryData } from "../api/batteryApi";
import { config } from "../config/environment";



describe("batteryApi", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns mock data in development environment", async () => {
    jest.mocked(config).isDevelopment = true;
    const data = await fetchBatteryData();
    expect(data.chargingStates.length).toBeGreaterThan(0);
  });

  it("handles API errors correctly", async () => {
    jest.mocked(config).isDevelopment = false;
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    await expect(fetchBatteryData()).rejects.toThrow(
      "Failed to fetch battery data"
    );
  });

});
