import {Component, OnInit} from '@angular/core';
import {combineLatest, take} from 'rxjs';
import {takeUntil} from "rxjs";
import {InfoDetailChartComponent} from '../../components/info-detail-chart/info-detail-chart.component';
import {UnsubscribeObservableService} from 'src/app/core/services/unsubsribe-observable/unsubscribe-observable.service';
import {CountryAllChartFormat} from 'src/app/core/models/types/CountryAllChartFormat';
import {ChartFormatDataService} from 'src/app/core/services/chart-format/chart-format-data.service';
import {CountriesChartComponent} from '../../components/countries-chart/countries-chart.component';
import {ChartDataService} from 'src/app/core/services/chart-data/chart-data.service';
import {HttpErrorComponent} from "../../components/http-error/http-error.component";
import {InfoDetailChart} from "../../core/models/types/InfoDetailChart";
import {AsyncPipe, NgForOf} from "@angular/common";


@Component({
  selector: 'app-dashboard-countries',
  standalone: true,
  imports: [InfoDetailChartComponent, CountriesChartComponent, HttpErrorComponent, AsyncPipe, NgForOf],
  templateUrl: './dashboard-countries.component.html',
  styleUrl: './dashboard-countries.component.scss'
})
export class DashboardCountriesComponent extends UnsubscribeObservableService implements OnInit {

  dataForDashboard!: CountryAllChartFormat[];
  title!: string;
  isDataLoaded!: boolean;
  infoDataCountriesChart!: InfoDetailChart[];

  constructor(
    private chartData: ChartDataService,
    private chartFormatService: ChartFormatDataService
  ) {
    super();
  }

  ngOnInit(): void {
    this.title = 'Medals per country';
    this.getCountriesData();

    this.chartData.getInfoDetailsChartForCountries()
      .pipe(take(1))
      .subscribe({
        next: data => {
          this.infoDataCountriesChart = data;
        },
        error: error => {
          console.error(error);
        }
      });
  }

  private getCountriesData(): void {
    combineLatest([
      this.chartData.getTotalJos(),
      this.chartData.getTotalCountry(),
      this.chartFormatService.getFormatDataForPieChartForAllCountry()
    ]).pipe(takeUntil(this.getUnsubscribe)).subscribe(
      ([totalOlympics, totalHostingCountries, dashboardData]: [number, number, CountryAllChartFormat[]]) => {
        this.dataForDashboard = dashboardData;
        this.isDataLoaded = !!this.dataForDashboard?.length
      }
    );
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
