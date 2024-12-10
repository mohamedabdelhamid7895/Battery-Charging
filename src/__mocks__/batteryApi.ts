export const fetchBatteryData = jest.fn().mockResolvedValue({
  chargingStates: [
    { date: "2024-03-15T10:00:00Z", chargingLevel: 50, internalEventId: 1 },
    { date: "2024-03-15T11:00:00Z", chargingLevel: 60, internalEventId: 2 },
  ],
});
