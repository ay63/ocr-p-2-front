import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CountryAllChartFormat} from 'src/app/core/models/types/CountryAllChartFormat';
import {OnResize} from "../../core/models/interfaces/OnResize";

@Component({
  selector: 'app-countries-chart',
  standalone: true,
  imports: [
    NgxChartsModule,
  ],
  templateUrl: './countries-chart.component.html',
  styleUrl: './countries-chart.component.scss',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class CountriesChartComponent implements OnResize{

  @ViewChild('containerRef')
  containerRef!: ElementRef;

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

  public onResize(): void {
    if (this.containerRef.nativeElement.offsetWidth < 400) {
      this.view = [this.containerRef.nativeElement.offsetWidth, 300]
    } else {
      this.view = [this.containerRef.nativeElement.offsetWidth, this.containerRef.nativeElement.offsetHeight]
    }
  }

}
