type SeriesData = {
  name: string;
  value: number;
}

type CountryDetailChartData = {
  name: string;
  series: SeriesData[];
}

export type CountryDetailChartFormat = CountryDetailChartData[];

