import {Component, OnInit} from '@angular/core';

import {takeUntil} from "rxjs";
import {InfoDetailChartComponent} from '../info-detail-chart/info-detail-chart.component';
import {UnsubscribeObservableService} from 'src/app/core/services/unsubsribe-observable/unsubscribe-observable.service';
import {CountryAllChartFormat} from 'src/app/core/models/types/CountryAllChartFormat';
import {ChartFormatDataService} from 'src/app/core/services/chart-format/chart-format-data.service';
import {CountriesChartComponent} from '../countries-chart/countries-chart.component';
import {ChartDataService} from 'src/app/core/services/chart-data/chart-data.service';
import {NotFoundComponent} from "../not-found/not-found.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InfoDetailChartComponent, CountriesChartComponent, NotFoundComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends UnsubscribeObservableService implements OnInit {

  totalOlympics!: number;
  totalHostingCountries!: number;
  dataForDashboard!: CountryAllChartFormat[];
  title!: string;

  constructor(
    private chartData: ChartDataService,
    private chartFormatService: ChartFormatDataService
  ) {
    super();
  }

  ngOnInit(): void {
    this.title = 'Medals per country';

    this.chartData.getTotalJos().pipe(takeUntil(this.getUnsubscribe)).subscribe(
      (value: number) => {
        this.totalOlympics = value
      },
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
