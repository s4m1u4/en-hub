export interface IChartPieData {
  name: string | undefined;
  value: number;
}

export interface ChartPieProps {
  data: IChartPieData[];
}

export interface ICustomTooltip {
  active: boolean;
  payload: IChartPieData[];
}
