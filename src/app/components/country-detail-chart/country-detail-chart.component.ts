import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {CountryDetailChartFormat} from "../../core/models/types/CountryDetailChartFormat";
import {OnResize} from "../../core/models/interfaces/OnResize";

@Component({
  selector: 'app-country-detail-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './country-detail-chart.component.html',
  styleUrl: './country-detail-chart.component.scss',
  host: {
    '(window:resize)': 'resizeChart()'
  }
})
export class CountryDetailChartComponent implements OnResize {

  @ViewChild('containerRef')
  containerRef!: ElementRef;

  @Input()
  data!: CountryDetailChartFormat|[]
  view!: [number, number];
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dates';
  timeline: boolean = true;

  public resizeChart(): void {
    if (this.containerRef.nativeElement.offsetWidth < 400) {
      this.view = [this.containerRef.nativeElement.offsetWidth, 600]
    } else {
      this.view = [this.containerRef.nativeElement.offsetWidth, this.containerRef.nativeElement.offsetHeight]
    }
  }

}

