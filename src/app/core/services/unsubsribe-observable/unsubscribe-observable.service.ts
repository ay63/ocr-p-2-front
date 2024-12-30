import {Injectable, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class UnsubscribeObservableService implements OnDestroy {

  private unsubscribe$: Subject<void> = new Subject();

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public get getUnsubscribe(): Subject<void> {
    return this.unsubscribe$;
  }

}
