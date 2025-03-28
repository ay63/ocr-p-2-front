import {Component, Input, OnInit} from '@angular/core';
import {LineChartModule} from "@swimlane/ngx-charts";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";
import {CountryDetailChartComponent} from '../../components/country-detail-chart/country-detail-chart.component';
import {InfoDetailChartComponent} from '../../components/info-detail-chart/info-detail-chart.component';
import {UnsubscribeObservableService} from 'src/app/core/services/unsubsribe-observable/unsubscribe-observable.service';
import {CountryDetailChartFormat} from 'src/app/core/models/types/CountryDetailChartFormat';
import {Olympic} from 'src/app/core/models/interfaces/Olympic';
import {takeUntil} from 'rxjs';
import {Participation} from 'src/app/core/models/interfaces/Participation';
import {ChartFormatDataService} from 'src/app/core/services/chart-format/chart-format-data.service';
import {ChartDataService} from 'src/app/core/services/chart-data/chart-data.service';
import {HttpErrorComponent} from "../../components/http-error/http-error.component";
import {InfoDetailChart} from "../../core/models/types/InfoDetailChart";

@Component({
  selector: 'app-dashboard-country-detail',
  standalone: true,
  imports: [
    CountryDetailChartComponent,
    InfoDetailChartComponent,
    LineChartModule,
    NgIf,
    HttpErrorComponent
  ],
  templateUrl: './dashboard-country-detail.component.html',
  styleUrl: './dashboard-country-detail.component.scss'
})
export class DashboardCountryDetailComponent extends UnsubscribeObservableService implements OnInit {

  @Input()
  countrySelectedData!: Olympic | undefined;
  @Input()
  dataCountryChart!: CountryDetailChartFormat | [];

  infoDetailCharForCountry!: InfoDetailChart[];

  constructor(private chartFormat: ChartFormatDataService,
              private chartData: ChartDataService,
              private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.getCountryData();
  }

  getCountryData(): void {
    const countryId: number = this.route.snapshot.params['id'];

    this.chartData.getDataByCountryId(countryId).pipe(takeUntil(this.getUnsubscribe)).subscribe(
      (countryData: Olympic | undefined) => {
        this.countrySelectedData = countryData;
        if (this.countrySelectedData !== undefined) {
          this.dataCountryChart = this.chartFormat.getFormatDataForLineChartByCountry(this.countrySelectedData)
        }

        if (countryData !== undefined) {
          const participants: Participation[] = countryData.participations
          let numberOfEntries = participants.length ?? 0;
          let totalNumberMedals = participants.reduce((acc: number, data: Participation) => acc + data.medalsCount, 0);
          let totalNumberOfAthletes = participants.reduce((acc: number, data: Participation) => acc + data.athleteCount, 0);
          this.infoDetailCharForCountry = this.chartData.getInfoDetailCharForCountry(numberOfEntries , totalNumberMedals, totalNumberOfAthletes);

        }
      }
    )
  }
}
