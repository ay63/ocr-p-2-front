import {Injectable} from '@angular/core';
import {EMPTY, filter, forkJoin, map, Observable, of, take} from 'rxjs';
import {OlympicService} from "../olympic/olympic.service";
import {Olympic} from "../../models/interfaces/Olympic";
import {catchError } from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {InfoDetailChart} from "../../models/types/InfoDetailChart";

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private olympicService: OlympicService, private toastService: ToastrService) {
  }

  getTotalJos(): Observable<number> {
    return this.olympicService.getOlympics().pipe(
      filter((olympics: Olympic[] | null): olympics is Olympic[] => olympics !== null && olympics.length > 0),
      map((olympics: Olympic[]) => {
        return olympics[0].participations.length;
      }),
      catchError((error: string) => {
        this.toastService.error(error);
        return EMPTY;
      })
    )
  }

  getTotalCountry(): Observable<number> {
    return this.olympicService.getOlympics().pipe(
      filter((olympics: Olympic[] | null): olympics is Olympic[] => olympics !== null && olympics.length > 0),
      map((olympics: Olympic[]) => new Set(olympics.map((olymp: Olympic) => olymp.country)).size),
      catchError((error: string) => {
        this.toastService.error(error);
        return of(0);
      })
    );
  }

  getDataByCountryId(id: number): Observable<Olympic | undefined> {
    return this.olympicService.getOlympics().pipe(
      map((olympics: Olympic[] | null) => {
        if (!olympics) return undefined
        return olympics.find(olympic => olympic.id === Number(id));
      }),
      catchError((error: string) => {
        this.toastService.error(error);
        return EMPTY;
      })
    );
  }

  getInfoDetailsChartForCountries(): Observable<InfoDetailChart[]> {
    return forkJoin({
      numberJos: this.getTotalJos().pipe(take(1)),
      totalCountries: this.getTotalCountry().pipe(take(1)),
    }).pipe(
      map(({ numberJos, totalCountries }) => [
        {
          title: "Number of JOs",
          value: numberJos
        },
        {
          title: "Number of countries",
          value: totalCountries
        }
      ])
    );
  }

  getInfoDetailCharForCountry(numberOfEntries: number, totalNumberMedals: number ,totalNumberOfAthletes: number ): InfoDetailChart[] {
    return [
      {
        title: "Number of entries",
        value: numberOfEntries
      },
      {
        title: "Total number medals",
        value: totalNumberMedals
      },
      {
        title : "Total number of athletes",
        value :totalNumberOfAthletes
      }
    ]
  }
}
