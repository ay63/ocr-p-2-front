type SeriesData = {
  name: string;
  value: number;
}

export type CountryDetailChartData = {
  name: string;
  series: SeriesData[];
}

export type CountryDetailChartFormat = CountryDetailChartData[];

