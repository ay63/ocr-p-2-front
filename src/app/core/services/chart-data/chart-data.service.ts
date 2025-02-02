import {Injectable} from '@angular/core';
import {EMPTY, map, Observable, of} from 'rxjs';
import {OlympicService} from "../olympic/olympic.service";
import {Olympic} from "../../models/interfaces/Olympic";
import {catchError} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private olympicService: OlympicService, private toastService: ToastrService) {
  }

  getTotalJos(): Observable<number> {
    return this.olympicService.getOlympics().pipe(
      map((olympics: Olympic[] | null) => {
        if (!olympics) return 0;
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
      map((olympic: Olympic[] | null) => {
        if (!olympic) return 0;
        return new Set(olympic.map((olymp: Olympic) => olymp.country)).size;
      }),
      catchError((error: string) => {
        this.toastService.error(error);
        return EMPTY;
      })
    )
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

}
