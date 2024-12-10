import "@testing-library/jest-dom";
import { analyzeBatteryData } from "../../utils/batteryAnalytics";
import { ChargingState } from "../../types/battery";

describe("batteryAnalytics", () => {
  const mockData: ChargingState[] = [
    {
      date: "2024-09-02T07:00:00.000Z",
      chargingLevel: 40,
      internalEventId: 1,
    },
    {
      date: "2024-09-02T07:30:00.000Z",
      chargingLevel: 50,
      internalEventId: 2,
    },
    {
      date: "2024-09-02T08:00:00.000Z",
      chargingLevel: 45,
      internalEventId: 3,
    },
  ];

  it("calculates peak and lowest levels correctly", () => {
    const analytics = analyzeBatteryData(mockData);
    expect(analytics.peakLevel).toBe(50);
    expect(analytics.lowestLevel).toBe(40);
  });

  it("calculates charging and discharging times", () => {
    const analytics = analyzeBatteryData(mockData);
    expect(analytics.totalChargingTime).toBe(30);
    expect(analytics.totalDischargingTime).toBe(30);
  });

  it("calculates average charging rate", () => {
    const analytics = analyzeBatteryData(mockData);
    expect(analytics.averageChargingRate).toBeCloseTo(0.33, 1);
  });
});
