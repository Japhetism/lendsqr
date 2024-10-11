import { ZodError } from "zod";
import { ICard } from "../interfaces/card";
import { statisticColors, statisticIcons } from "../fixtures/dashboard";

type FormattedErrors = {
  [key: string]: string;
};

interface PerformanceData {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
}

export const formatFormDataErrors = (error: ZodError, initialFormData: any): typeof initialFormData => {
  const errors: FormattedErrors = {};
  error.errors.forEach((e) => {
    errors[e.path.join('.')] = e.message;
  });
  return {...initialFormData, ...errors};
};

export const formatNumber = (num: number) => num.toLocaleString();

export const formatString = (string: string) => string.replace(/([a-z])([A-Z])/g, '$1 $2');

export const formatStatisticsToArray = (statistics: Record<string, number>): ICard[] => {
  return Object.entries(statistics).map(([key, value], index: number) => ({
    title: formatString(key),
    value: formatNumber(value),
    backgroundColor: statisticColors[index % statisticColors.length],
    icon: statisticIcons[index % statisticIcons.length]
  }));
}

export const formatPerformanceToArray = (performance: PerformanceData): (string | number)[][] => {
  return [
      ["", ""],
      ...Object.entries(performance).map(([key, value]) => [
          key.charAt(0).toUpperCase() + key.slice(1), value
      ])
  ];
}