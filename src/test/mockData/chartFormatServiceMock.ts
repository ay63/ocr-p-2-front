import {Observable, of} from "rxjs";
import {CountryAllChartFormat} from "../../app/core/models/types/CountryAllChartFormat";
import {CountryDetailChartData} from "../../app/core/models/types/CountryDetailChartFormat";
import {Olympic} from "../../app/core/models/interfaces/Olympic";


export class ChartFormatServiceMock {
  getFormatDataForPieChartForAllCountry(): Observable<CountryAllChartFormat[]> {
    const mockData: CountryAllChartFormat[] = [
      {
        name: 'France',
        value: 200,
        extra: {id: 1}
      },
      {
        name: 'Germany',
        value: 150,
        extra: {id: 2}
      },
      {
        name: 'Spain',
        value: 120,
        extra: {id: 3}
      }
    ];

    return of(mockData);
  }

  getFormatDataForLineChartByCountry(olympic: Olympic): CountryDetailChartData[] {
    return [
      {
        name: "test",
        series: [{
          name: "test",
          value: 1,
        }]
      }
    ]
  }


}
