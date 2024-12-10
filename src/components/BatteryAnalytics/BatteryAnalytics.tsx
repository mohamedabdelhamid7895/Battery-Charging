import React from "react";
import { ChargingState } from "../../types/battery";
import { analyzeBatteryData } from "../../utils/batteryAnalytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faClock, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { StatusCard } from "../common/StatusCard";
import { StatusText } from "../common/StatusText";

interface BatteryAnalyticsProps {
  data: ChargingState[];
}

export const BatteryAnalytics: React.FC<BatteryAnalyticsProps> = ({ data }) => {
  const analytics = analyzeBatteryData(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <StatusCard role="region" aria-label="Peak Battery Level">
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-green-500"
          aria-hidden="true"
        />
        <StatusText
          primary={`${analytics.peakLevel}%`}
          secondary="Peak Level"
        />
      </StatusCard>

      <StatusCard role="region" aria-label="Average Charging Rate">
        <FontAwesomeIcon
          icon={faBolt}
          className="text-yellow-500"
          aria-hidden="true"
        />
        <StatusText
          primary={`${analytics.averageChargingRate.toFixed(2)}% per minute`}
          secondary="Avg. Charging Rate"
        />
      </StatusCard>

      {analytics.estimatedTimeToFull !== null && (
        <StatusCard role="region" aria-label="Estimated Time to Full">
          <FontAwesomeIcon
            icon={faClock}
            className="text-blue-500"
            aria-hidden="true"
          />
          <StatusText
            primary={`${analytics.estimatedTimeToFull} minutes`}
            secondary="Est. Time to Full"
          />
        </StatusCard>
      )}
    </div>
  );
};