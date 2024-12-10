import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull, faBatteryEmpty } from '@fortawesome/free-solid-svg-icons';
import { StatusCard } from "../common/StatusCard";
import { StatusText } from "../common/StatusText";

const getBatteryIcon = (level: number, isCharging: boolean) => {
  return isCharging ? faBatteryFull : faBatteryEmpty;
};

interface BatteryStatusProps {
  currentLevel: number;
  previousLevel: number;
}

export const BatteryStatus: React.FC<BatteryStatusProps> = ({
  currentLevel,
  previousLevel,
}) => {
  const isCharging = currentLevel > previousLevel;
  const batteryIcon = getBatteryIcon(currentLevel, isCharging);

  return (
    <StatusCard
      role="status"
      aria-label={`Battery ${
        isCharging ? "charging" : "discharging"
      } at ${currentLevel}%`}
    >
      <FontAwesomeIcon
        icon={batteryIcon}
        className={`w-6 h-6 ${isCharging ? "text-green-500" : "text-gray-500"}`}
        aria-hidden="true"
      />
      <StatusText
        primary={`${currentLevel}%`}
        secondary={isCharging ? "Charging" : "Discharging"}
      />
    </StatusCard>
  );
};