import { render, screen } from "@testing-library/react";
import { BatteryChart } from "./BatteryChart";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => children,
  LineChart: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Line: () => null,
  XAxis: () => null,
  YAxis: () => null,
  CartesianGrid: () => null,
  Tooltip: () => null,
}));

describe("BatteryChart", () => {
  const mockData = [
    {
      date: "2024-03-15T10:00:00Z",
      chargingLevel: 50,
      internalEventId: 1,
    },
  ];

  it("renders chart with data", () => {
    render(<BatteryChart data={mockData} />);
    expect(
      screen.getByRole("img", { name: /battery charging chart/i })
    ).toBeInTheDocument();
  });
});
