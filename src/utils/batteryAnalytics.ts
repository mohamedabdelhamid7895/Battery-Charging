import { ChargingState } from '../types/battery';
import dayjs from 'dayjs';

export interface BatteryAnalytics {
  averageChargingRate: number;
  totalChargingTime: number;
  totalDischargingTime: number;
  peakLevel: number;
  lowestLevel: number;
  estimatedTimeToFull: number | null;
}

export const analyzeBatteryData = (states: ChargingState[]): BatteryAnalytics => {
  let chargingTime = 0;
  let dischargingTime = 0;
  let totalChargingDelta = 0;
  
  const levels = states.map(s => s.chargingLevel);
  const peakLevel = Math.max(...levels);
  const lowestLevel = Math.min(...levels);

  for (let i = 1; i < states.length; i++) {
    const timeDiff = dayjs(states[i].date).diff(dayjs(states[i - 1].date), 'minute');
    const levelDiff = states[i].chargingLevel - states[i - 1].chargingLevel;
    
    if (levelDiff > 0) {
      chargingTime += timeDiff;
      totalChargingDelta += levelDiff;
    } else {
      dischargingTime += timeDiff;
    }
  }

  const averageChargingRate = chargingTime > 0 ? totalChargingDelta / chargingTime : 0;
  const estimatedTimeToFull = averageChargingRate > 0 
    ? Math.round((100 - states[states.length - 1].chargingLevel) / averageChargingRate)
    : null;

  return {
    averageChargingRate,
    totalChargingTime: chargingTime,
    totalDischargingTime: dischargingTime,
    peakLevel,
    lowestLevel,
    estimatedTimeToFull
  };
};