import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {CountryDetailChartFormat} from "../../core/types/CountryDetailChartFormat";
import { CountriesChartComponent } from '../countries-chart/countries-chart.component';

@Component({
  selector: 'app-country-detail-chart',
  standalone: true,
  imports: [CountriesChartComponent,NgxChartsModule],
  templateUrl: './country-detail-chart.component.html',
  styleUrl: './country-detail-chart.component.scss'
})
export class CountryDetailChartComponent {

  @ViewChild('containerRef')
  containerRef!: ElementRef;

  @Input()
  data!: CountryDetailChartFormat|[]

  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dates';
  timeline: boolean = true;
}

