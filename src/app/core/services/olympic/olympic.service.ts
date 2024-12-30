import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ToastrService} from "ngx-toastr";
import {Olympic} from "../../models/interfaces/Olympic";

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl:string = './assets/mock/olympic.json';
  private olympics$: BehaviorSubject<Olympic[] | null> = new BehaviorSubject<Olympic[] | null>(null);

  constructor(
    private http: HttpClient,
    private toastService: ToastrService) {
  }

  loadInitialData() {
    return this.http.get<Olympic[] | null>(this.olympicUrl).pipe(
      tap((value: Olympic[] | null) => {
        if (value !== null && value.length > 0) {
          this.olympics$.next(value)
        } else {
          this.toastService.error('App could not be loaded, please try later or contact the support team');
        }
      }),
      catchError((error: string, caught: Observable<Olympic[] | null>) => {
        this.toastService.error(error);
        this.olympics$.next(null);
        return caught;
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }
}
