import { Component, OnInit } from '@angular/core';

import { takeUntil } from "rxjs";
import { InfoDetailChartComponent } from '../info-detail-chart/info-detail-chart.component';
import { UnsubscribeObservable } from 'src/app/core/services/unsubsribe-observable/UnsubscribeObservable';
import { CountryAllChartFormat } from 'src/app/core/types/CountryAllChartFormat';
import { ChartFormatService } from 'src/app/core/services/chart-format/chart-format.service';
import { CountriesChartComponent } from '../countries-chart/countries-chart.component';
import { ChartDataService } from 'src/app/core/services/chart-data/chart-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InfoDetailChartComponent, CountriesChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends UnsubscribeObservable implements OnInit {

  totalOlympics: number = 0;
  totalHostingCountries: number = 0;
  dataForDashboard!: CountryAllChartFormat[];
  title!: string;

  constructor(
    private chartData: ChartDataService,
    private chartFormatService: ChartFormatService
  ) {
    super();
  }

  ngOnInit(): void {
    this.title = 'Medals per country';

    this.chartData.getTotalJos().pipe(takeUntil(this.getUnsubscribe)).subscribe(
      (value: number) => {
        this.totalOlympics = value
      }
    );

    this.chartData.getTotalCountry().pipe(takeUntil(this.getUnsubscribe)).subscribe(
      (value: number) => {
        this.totalHostingCountries = value
      }
    )

    this.chartFormatService.getFormatDataForPieChartForAllCountry().pipe(takeUntil(this.getUnsubscribe)).subscribe(
      (dashboardData: CountryAllChartFormat[]) => {
        this.dataForDashboard = dashboardData
      }
    )
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
