import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BatteryChart } from './BatteryChart';

const mockData = [
  {
    date: "2024-03-15T10:00:00Z",
    chargingLevel: 50,
    internalEventId: 1
  },
  {
    date: "2024-03-15T11:00:00Z",
    chargingLevel: 60,
    internalEventId: 2
  }
];

describe('BatteryChart', () => {
  beforeEach(() => {
    // Mock ResizeObserver
    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });

  it('renders chart with data', () => {
    render(<BatteryChart data={mockData} />);
    expect(screen.getByRole('img', { name: /battery charging chart/i })).toBeInTheDocument();
  });

  it('changes chart type when selector is clicked', () => {
    render(<BatteryChart data={mockData} />);
    const barChartButton = screen.getByRole('radio', { name: /bar chart/i });
    
    fireEvent.click(barChartButton);
    expect(barChartButton).toHaveAttribute('aria-checked', 'true');
  });

  it('displays chart type selector', () => {
    render(<BatteryChart data={mockData} />);
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getByText('Line Chart')).toBeInTheDocument();
    expect(screen.getByText('Area Chart')).toBeInTheDocument();
    expect(screen.getByText('Bar Chart')).toBeInTheDocument();
  });
});