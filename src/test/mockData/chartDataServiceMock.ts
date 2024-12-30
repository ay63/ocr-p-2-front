import {Observable, of} from "rxjs";
import {Olympic} from "../../app/core/models/interfaces/Olympic";

export class chartDataServiceMock {

  getTotalJos(): Observable<number> {
    return of(2)
  }

  getTotalCountry(): Observable<number> {
    return of(5)
  }

  getDataByCountryId(id: number): Observable<Olympic | undefined> {
    return of(
      {
        id: 1,
        country: "France",
        participations: [
          {
            id: 1,
            year: 2018,
            city: "LA",
            medalsCount: 120,
            athleteCount: 350
          }
        ]
      }
    )
  }
}
