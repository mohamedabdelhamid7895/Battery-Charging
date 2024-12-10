export interface ChargingState {
  date: string;
  chargingLevel: number;
  internalEventId: number;
}

export interface ChargingData {
  chargingStates: ChargingState[];
}

export type ChartType = 'line' | 'area' | 'bar';