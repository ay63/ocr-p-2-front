import { Component, OnInit } from '@angular/core';

import { takeUntil } from "rxjs";
import { CountryDetailChartComponent } from '../country-detail-chart/country-detail-chart.component';
import { InfoDetailChartComponent } from '../info-detail-chart/info-detail-chart.component';
import { UnsubscribeObservable } from 'src/app/core/services/unsubsribe-observable/UnsubscribeObservable';
import { CountryAllChartFormat } from 'src/app/core/types/CountryAllChartFormat';
import { CountryDataService } from '../../../../../ocr-project-2/src/app/core/services/country-data/country-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CountryDetailChartComponent, InfoDetailChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends UnsubscribeObservable implements OnInit {

  totalOlympics: number = 0;
  totalHostingCountries: number = 0;
  dataForDashboard!: CountryAllChartFormat[];
  title!: string;

  constructor(
    private countryDataService: CountryDataService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.title = 'Medals per country';

    this.countryDataService.getTotalJos().pipe(takeUntil(this.getUnsubscribe)).subscribe(
      (value: number) => {
        this.totalOlympics = value
      }
    );

    this.countryDataService.getTotalCountry().pipe(takeUntil(this.getUnsubscribe)).subscribe(
      (value: number) => {
        this.totalHostingCountries = value
      }
    )

    this.countryDataService.getDataForDashboard().pipe(takeUntil(this.getUnsubscribe)).subscribe(
      (dashboardData: CountryAllChartFormat[]) => {
        this.dataForDashboard = dashboardData
      }
    )
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
