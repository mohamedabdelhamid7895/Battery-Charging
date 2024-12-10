import React, { memo } from "react";
import { useBatteryData } from "./hooks/useBatteryData";
import { BatteryChart } from "./components/BatteryChart/BatteryChart";
import { BatteryStatus } from "./components/BatteryStatus/BatteryStatus";
import { BatteryAnalytics } from "./components/BatteryAnalytics/BatteryAnalytics";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Card } from "./components/common/Card";
import { Button } from "./components/common/Button";
import { SectionTitle } from "./components/common/SectionTitle";

const AppComponent: React.FC = () => {
  const { data, loading, error, refetch } = useBatteryData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data?.chargingStates?.length) {
    return <ErrorMessage message="No battery data available" />;
  }

  const latestState = data.chargingStates[data.chargingStates.length - 1];
  const previousState =
    data.chargingStates[data.chargingStates.length - 2] || latestState;

  return (
    <div className="min-h-screen bg-gray-50 p-6" role="main">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex justify-between items-center">
          <SectionTitle title="Battery Charging Monitor" />
          <Button onClick={refetch} variant="primary" aria-label="Refresh data">
            Refresh
          </Button>
        </header>

        <Card className="p-6">
          <BatteryStatus
            currentLevel={latestState.chargingLevel}
            previousLevel={previousState.chargingLevel}
          />
          <BatteryAnalytics data={data.chargingStates} />
          <BatteryChart data={data.chargingStates} />
        </Card>
      </div>
    </div>
  );
};

export default memo(AppComponent);