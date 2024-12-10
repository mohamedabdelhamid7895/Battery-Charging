import React, { useMemo, useCallback, memo } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartType, ChargingState } from '../../types/battery';
import { ChartTypeSelector } from '../ChartTypeSelector/ChartTypeSelector';
import { formatDate } from '../../utils/dateUtils';

interface BatteryChartProps {
  data: ChargingState[];
}

const BatteryChartComponent: React.FC<BatteryChartProps> = ({ data }) => {
  const [chartType, setChartType] = React.useState<ChartType>('line');

  const formattedData = useMemo(() => 
    data.map(item => ({
      ...item,
      formattedDate: formatDate(item.date),
    })),
    [data]
  );

  const handleTypeChange = useCallback((type: ChartType) => {
    setChartType(type);
  }, []);

  const chartConfig = useMemo(() => ({
    data: formattedData,
    margin: { top: 20, right: 30, left: 20, bottom: 20 },
  }), [formattedData]);

  const renderChart = useMemo(() => {
    const commonAxisProps = {
      xAxis: <XAxis dataKey="formattedDate" label={{ value: 'Time', position: 'bottom' }} />,
      yAxis: (
        <YAxis
          domain={[0, 100]}
          label={{ value: 'Battery Level (%)', angle: -90, position: 'insideLeft' }}
        />
      ),
    };

    switch (chartType) {
      case 'area':
        return (
          <AreaChart {...chartConfig}>
            <CartesianGrid strokeDasharray="3 3" />
            {commonAxisProps.xAxis}
            {commonAxisProps.yAxis}
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Battery Level']}
              labelFormatter={(label) => `Time: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="chargingLevel"
              stroke="#4f46e5"
              fill="#4f46e5"
              fillOpacity={0.2}
            />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart {...chartConfig}>
            <CartesianGrid strokeDasharray="3 3" />
            {commonAxisProps.xAxis}
            {commonAxisProps.yAxis}
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Battery Level']}
              labelFormatter={(label) => `Time: ${label}`}
            />
            <Bar
              dataKey="chargingLevel"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );
      default:
        return (
          <LineChart {...chartConfig}>
            <CartesianGrid strokeDasharray="3 3" />
            {commonAxisProps.xAxis}
            {commonAxisProps.yAxis}
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Battery Level']}
              labelFormatter={(label) => `Time: ${label}`}
            />
            <Line
              type="monotone"
              dataKey="chargingLevel"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={{ fill: '#4f46e5' }}
            />
          </LineChart>
        );
    }
  }, [chartType, chartConfig]);

  return (
    <div>
      <ChartTypeSelector selectedType={chartType} onTypeChange={handleTypeChange} />
      <div className="w-full h-[400px]" role="img" aria-label="Battery charging chart">
        <ResponsiveContainer>{renderChart}</ResponsiveContainer>
      </div>
    </div>
  );
};

export const BatteryChart = memo(BatteryChartComponent);