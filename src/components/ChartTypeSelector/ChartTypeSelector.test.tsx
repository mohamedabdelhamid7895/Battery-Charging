import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChartTypeSelector } from "./ChartTypeSelector";

describe("ChartTypeSelector", () => {
  it("renders all chart type options", () => {
    const onTypeChange = jest.fn();
    render(
      <ChartTypeSelector selectedType="line" onTypeChange={onTypeChange} />
    );

    expect(screen.getByText("Line Chart")).toBeInTheDocument();
    expect(screen.getByText("Area Chart")).toBeInTheDocument();
    expect(screen.getByText("Bar Chart")).toBeInTheDocument();
  });

  it("highlights selected chart type", () => {
    const onTypeChange = jest.fn();
    render(
      <ChartTypeSelector selectedType="area" onTypeChange={onTypeChange} />
    );

    const areaButton = screen.getByRole("radio", { name: "Area Chart" });
    expect(areaButton).toHaveAttribute("aria-checked", "true");
  });

  it("calls onTypeChange when a different type is selected", () => {
    const onTypeChange = jest.fn();
    render(
      <ChartTypeSelector selectedType="line" onTypeChange={onTypeChange} />
    );

    fireEvent.click(screen.getByText("Bar Chart"));
    expect(onTypeChange).toHaveBeenCalledWith("bar");
  });
});
