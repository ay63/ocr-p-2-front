import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {DashboardComponent} from "./dashboard.component";
import {ChartDataService} from "../../core/services/chart-data/chart-data.service";
import {OlympicService} from "../../core/services/olympic/olympic.service";
import {ToastrService} from "ngx-toastr";
import {chartDataServiceMock} from "../../../test/mockData/chartDataServiceMock";
import {ChartFormatService} from "../../core/services/chart-format/chart-format.service";
import {ChartFormatServiceMock} from "../../../test/mockData/chartFormatServiceMock";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let olympicServiceSpy: jasmine.SpyObj<OlympicService>;
  let toastServiceSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {

    const olympicServiceMock = jasmine.createSpyObj('OlympicService', ['getOlympics']);
    const toastServiceMock = jasmine.createSpyObj('ToastrService', ['error']);

    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, NoopAnimationsModule],
      providers: [
        {provide: OlympicService, useValue: olympicServiceMock},
        {provide: ChartDataService, useClass: chartDataServiceMock},
        {provide: ChartFormatService, useClass: ChartFormatServiceMock},
        {provide: ToastrService, useValue: toastServiceMock}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DashboardComponent', () => {
    expect(component).toBeTruthy();
  });
});
