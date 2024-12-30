import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardCountryDetailComponent} from './dashboard-country-detail.component';
import {ActivatedRoute} from "@angular/router";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ChartDataService} from "../../core/services/chart-data/chart-data.service";
import {chartDataServiceMock} from "../../../test/mockData/chartDataServiceMock";
import {OlympicService} from "../../core/services/olympic/olympic.service";
import {ToastrService} from "ngx-toastr";

describe('DashboardCountryDetailComponent', () => {
  let component: DashboardCountryDetailComponent;
  let fixture: ComponentFixture<DashboardCountryDetailComponent>;

  beforeEach(async () => {
    const olympicServiceMock = jasmine.createSpyObj('OlympicService', ['getOlympics']);
    const toastServiceMock = jasmine.createSpyObj('ToastrService', ['error']);
    await TestBed.configureTestingModule({
      imports: [
        DashboardCountryDetailComponent,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [
        {provide: ChartDataService, useClass: chartDataServiceMock},
        {provide: OlympicService, useValue: olympicServiceMock},
        {provide: ToastrService, useValue: toastServiceMock},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {'id': '123'}
            }
          }
        },

      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(DashboardCountryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create DashboardCountryDetailComponent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
