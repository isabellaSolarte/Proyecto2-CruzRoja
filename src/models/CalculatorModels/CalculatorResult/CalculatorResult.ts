export interface sourceResult {
  source: string;
  total: number;
}

export interface monthResult {
  year: number;
  month: number[];
  total: number;
}

export interface CalculatorResult {
  total: number;
  totalBySources: sourceResult[];
  totalByMonth: monthResult[];
  percentage: sourceResult[];
}
