import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailChartComponent } from './country-detail-chart.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('CountryDetailChartComponent', () => {
  let component: CountryDetailChartComponent;
  let fixture: ComponentFixture<CountryDetailChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailChartComponent, BrowserAnimationsModule, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDetailChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CountryDetailChartComponent', () => {
    expect(component).toBeTruthy();
  });
});
