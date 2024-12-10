import { render, screen, fireEvent } from "@testing-library/react";
import { ChartTypeSelector } from "./ChartTypeSelector";

describe("ChartTypeSelector", () => {
  it("renders all chart type options", () => {
    const onTypeChange = jest.fn();
    render(
      <ChartTypeSelector selectedType="line" onTypeChange={onTypeChange} />
    );
    expect(screen.getByText(/Line Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Area Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Bar Chart/i)).toBeInTheDocument();
  });


  it("calls onTypeChange when a different type is selected", () => {
    const onTypeChange = jest.fn();
    render(
      <ChartTypeSelector selectedType="line" onTypeChange={onTypeChange} />
    );
    fireEvent.click(screen.getByText(/Area Chart/i));
    expect(onTypeChange).toHaveBeenCalledWith("area");
  });
});
