import { formatDate } from "../utils/dateUtils";

describe("dateUtils", () => {
  describe("formatDate", () => {
    const mockDate = new Date("2024-03-15T00:00:00Z");

    beforeAll(() => {
      jest.useFakeTimers();
      jest.setSystemTime(mockDate);
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it("formats date correctly", () => {
      const date = "2024-03-15T10:30:00Z";
      expect(formatDate(date)).toBe("12:30");
    });
  });
});
