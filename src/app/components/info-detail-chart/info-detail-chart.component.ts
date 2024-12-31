import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-detail-chart',
  standalone: true,
  imports: [],
  templateUrl: './info-detail-chart.component.html',
  styleUrl: './info-detail-chart.component.scss'
})
export class InfoDetailChartComponent {

  @Input()
  title!: string;

  @Input()
  value!: number;

}
