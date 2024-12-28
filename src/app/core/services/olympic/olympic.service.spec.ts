import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Olympic} from "../../models/interfaces/Olympic";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

  constructor(private http: HttpClient, private toastService: ToastrService) {
  }

  loadInitialData() {
    return this.http.get<Olympic[] | null>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error: string, caught) => {
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
