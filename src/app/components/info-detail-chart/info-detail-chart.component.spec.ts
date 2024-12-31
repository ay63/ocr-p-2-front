import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoDetailChartComponent } from './info-detail-chart.component';


describe('InfoDetailDataComponent', () => {
  let component: InfoDetailChartComponent;
  let fixture: ComponentFixture<InfoDetailChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDetailChartComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoDetailChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
