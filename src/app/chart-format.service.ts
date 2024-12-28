import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, Observable } from 'rxjs';
import { Olympic } from './core/models/interfaces/Olympic';
import { Participation } from './core/models/interfaces/Participation';
import { OlympicService } from './core/services/olympic/olympic.service';
import { CountryAllChartFormat } from './core/types/CountryAllChartFormat';

@Injectable({
  providedIn: 'root'
})
export class ChartFormatService {

  constructor(private olympicService: OlympicService, private toastService: ToastrService) {
  }

  getFormatDataForPieChartForAllCountry(): Observable<CountryAllChartFormat[]> {
    return this.olympicService.getOlympics().pipe(
      map((olympics: Olympic[] | null) => {
        if (!olympics) return [];
        return olympics.map(olympic => {
          return {
            name: olympic.country,
            value: olympic.participations.reduce((accumulator: number, participation: Participation) =>
                accumulator + participation.medalsCount
              , 0),
            extra: {
              id: olympic.id,
            }
          };
        })
      }),
      catchError((error: string, caught) => {
        this.toastService.error(error);
        return caught;
      })
    )
  }

  getFormatDataForLineChartByCountry(olympic: Olympic): any {
    return [{
      name: olympic.country,
      series:
        olympic.participations.map((participation: Participation) => {
          return {
            name: String(participation.year),
            value: participation.medalsCount,
          }
        })
    }]
  }
}
