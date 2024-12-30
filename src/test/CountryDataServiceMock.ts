import {Observable, of} from "rxjs";
import {Olympic} from "../app/core/models/interfaces/Olympic";
import {CountryAllChartFormat} from "../app/core/models/types/CountryAllChartFormat";

export class CountryDataServiceMock {

  getTotalJos(): Observable<number> {
    return of(2)
  }

  getTotalCountry(): Observable<number> {
    return of(2)
  }

  getDataByCountryId(id: number): Observable<Olympic | undefined> {
    return of({
      id: 1,
      country: "France",
      participations: []
    })
  }

  getDataForDashboard(): Observable<CountryAllChartFormat[]> {
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



}
