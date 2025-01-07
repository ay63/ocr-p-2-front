import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {catchError, EMPTY, map, Observable, of} from 'rxjs';
import { Olympic } from '../../models/interfaces/Olympic';
import { Participation } from '../../models/interfaces/Participation';
import { OlympicService } from '../olympic/olympic.service';
import {CountryAllChartFormat} from "../../models/types/CountryAllChartFormat";
import {CountryDetailChartData} from "../../models/types/CountryDetailChartFormat";


@Injectable({
  providedIn: 'root'
})
export class ChartFormatDataService {

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
      catchError((error: string) => {
        this.toastService.error(error);
        return EMPTY
      })
    )
  }

  getFormatDataForLineChartByCountry(olympic: Olympic): CountryDetailChartData[] {
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
