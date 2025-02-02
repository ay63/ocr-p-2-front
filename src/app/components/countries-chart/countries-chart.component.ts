import {
  Component,
  Input,
} from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CountryAllChartFormat} from 'src/app/core/models/types/CountryAllChartFormat';


@Component({
  selector: 'app-countries-chart',
  standalone: true,
  imports: [
    NgxChartsModule,
  ],
  templateUrl: './countries-chart.component.html',
  styleUrl: './countries-chart.component.scss',

})
export class CountriesChartComponent {


  @Input()
  data!: CountryAllChartFormat[];
  gradient: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  view!: [number, number];

  constructor(private router: Router, private toastService: ToastrService) {
  }

  onSelect(data: CountryAllChartFormat): void {
    const idCountry: number = data.extra.id;
    this.router.navigateByUrl(`country-detail-chart/${idCountry}`).catch(error =>
      this.toastService.error(error))
  }


}
