import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, Observable } from 'rxjs';
import { Olympic } from '../../models/interfaces/Olympic';
import { Participation } from '../../models/interfaces/Participation';
import { OlympicService } from '../olympic/olympic.service';
import { CountryAllChartFormat } from '../../types/CountryAllChartFormat';

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
