import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BatteryStatus } from "./BatteryStatus";

describe("BatteryStatus", () => {
  it("shows charging status when battery level increases", () => {
    render(<BatteryStatus currentLevel={50} previousLevel={45} />);
    expect(screen.getByText("Charging")).toBeInTheDocument();
  });

  it("shows discharging status when battery level decreases", () => {
    render(<BatteryStatus currentLevel={45} previousLevel={50} />);
    expect(screen.getByText("Discharging")).toBeInTheDocument();
  });
});
