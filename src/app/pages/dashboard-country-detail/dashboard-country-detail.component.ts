import { Component, Input, OnInit } from '@angular/core';
import { LineChartModule } from "@swimlane/ngx-charts";
import { ActivatedRoute } from "@angular/router";
import { NgIf } from "@angular/common";
import { CountryDetailChartComponent } from '../country-detail-chart/country-detail-chart.component';
import { InfoDetailChartComponent } from '../info-detail-chart/info-detail-chart.component';
import { UnsubscribeObservable } from 'src/app/core/services/unsubsribe-observable/UnsubscribeObservable';
import { CountryDetailChartFormat } from 'src/app/core/models/types/CountryDetailChartFormat';
import { Olympic } from 'src/app/core/models/interfaces/Olympic';
import { takeUntil } from 'rxjs';
import { Participation } from 'src/app/core/models/interfaces/Participation';
import { ChartFormatService } from 'src/app/core/services/chart-format/chart-format.service';
import { ChartDataService } from 'src/app/core/services/chart-data/chart-data.service';
import {NotFoundComponent} from "../not-found/not-found.component";

@Component({
  selector: 'app-dashboard-country-detail',
  standalone: true,
  imports: [
    CountryDetailChartComponent,
    InfoDetailChartComponent,
    LineChartModule,
    NgIf,
    NotFoundComponent
  ],
  templateUrl: './dashboard-country-detail.component.html',
  styleUrl: './dashboard-country-detail.component.scss'
})
export class DashboardCountryDetailComponent extends UnsubscribeObservable implements OnInit {

  @Input()
  countrySelectedData!: Olympic | undefined;
  @Input()
  dataCountryChart!: CountryDetailChartFormat | [];

  numberOfEntries: number = 0;
  totalNumberMedals: number = 0;
  totalNumberOfAthletes: number = 0;

  constructor(private chartFormat: ChartFormatService,
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
          this.numberOfEntries = countryData.participations.length ?? 0;
          this.totalNumberMedals = countryData.participations.reduce((acc: number, data: Participation) => acc + data.medalsCount, 0);
          this.totalNumberOfAthletes = countryData.participations.reduce((acc: number, data: Participation) => acc + data.athleteCount, 0);
        }
      }
    )
  }
}
