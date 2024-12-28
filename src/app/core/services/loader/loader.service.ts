import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {
  }

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
    this.loadingSubject.complete();0
  }
}
