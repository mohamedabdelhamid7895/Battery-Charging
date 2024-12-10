import "@testing-library/jest-dom";
import {
  formatDate,
  calculateTimeAgo,
  isWithinLast24Hours,
} from "../utils/dateUtils";

describe("dateUtils", () => {
  const mockDate = new Date("2024-03-15T12:00:00Z");

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe("formatDate", () => {
    it("formats date correctly", () => {
      const date = "2024-03-15T10:30:00Z";
      expect(formatDate(date)).toBe("10:30");
    });
  });

  describe("calculateTimeAgo", () => {
    it("shows minutes for recent times", () => {
      const date = new Date(mockDate.getTime() - 30 * 60 * 1000).toISOString();
      expect(calculateTimeAgo(date)).toBe("30m ago");
    });

    it("shows hours for older times", () => {
      const date = new Date(
        mockDate.getTime() - 2 * 60 * 60 * 1000
      ).toISOString();
      expect(calculateTimeAgo(date)).toBe("2h ago");
    });
  });

  describe("isWithinLast24Hours", () => {
    it("returns true for dates within 24 hours", () => {
      const date = new Date(
        mockDate.getTime() - 23 * 60 * 60 * 1000
      ).toISOString();
      expect(isWithinLast24Hours(date)).toBe(true);
    });

    it("returns false for dates older than 24 hours", () => {
      const date = new Date(
        mockDate.getTime() - 25 * 60 * 60 * 1000
      ).toISOString();
      expect(isWithinLast24Hours(date)).toBe(false);
    });
  });
});
