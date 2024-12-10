import React, { memo, useCallback } from "react";
import {
  faChartLine,
  faChartArea,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { ChartType } from "../../types/battery";
import { RadioGroup } from "../common/RadioGroup";
import { RadioButton } from "../common/RadioButton";

interface ChartTypeSelectorProps {
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

const ChartTypeSelectorComponent: React.FC<ChartTypeSelectorProps> = ({
  selectedType,
  onTypeChange,
}) => {
  const chartTypes = [
    { type: "line" as ChartType, icon: faChartLine, label: "Line Chart" },
    { type: "area" as ChartType, icon: faChartArea, label: "Area Chart" },
    { type: "bar" as ChartType, icon: faChartBar, label: "Bar Chart" },
  ];

  const handleTypeChange = useCallback(
    (type: ChartType) => {
      onTypeChange(type);
    },
    [onTypeChange]
  );

  return (
    <RadioGroup label="Chart type selection" className="mb-4">
      {chartTypes.map(({ type, icon, label }) => (
        <RadioButton
          key={type}
          label={label}
          icon={icon}
          isSelected={selectedType === type}
          onClick={() => handleTypeChange(type)}
        />
      ))}
    </RadioGroup>
  );
};

export const ChartTypeSelector = memo(ChartTypeSelectorComponent);