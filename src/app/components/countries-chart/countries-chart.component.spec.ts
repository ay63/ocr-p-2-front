import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CountriesChartComponent} from './countries-chart.component';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ElementRef} from '@angular/core';

describe('CountriesChartComponent', () => {
  let component: CountriesChartComponent;
  let fixture: ComponentFixture<CountriesChartComponent>;

  beforeEach(async () => {
    const toastServiceMock = jasmine.createSpyObj('ToastrService', ['error']);
    const routeMock = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CountriesChartComponent],
      providers: [
        {provide: Router, useValue: routeMock},
        {provide: ToastrService, useValue: toastServiceMock},
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesChartComponent);
    component = fixture.componentInstance;
    component.containerRef = {
      nativeElement: {
        offsetWidth: 500,
        offsetHeight: 400
      }
    } as ElementRef;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set view dimensions correctly when resizing for small width', () => {
    spyOnProperty(component.containerRef.nativeElement, 'offsetWidth', 'get').and.returnValue(399);
    component.onResize();
    expect(component.view).toEqual([399, 300]);
  });

  it('should have default input values', () => {
    expect(component.gradient).toBeTrue();
    expect(component.showLabels).toBeTrue();
    expect(component.isDoughnut).toBeFalse();
  });

  it('should update the view on resizeChart call', () => {
    spyOnProperty(component.containerRef.nativeElement, 'offsetWidth', 'get').and.returnValue(800);
    spyOnProperty(component.containerRef.nativeElement, 'offsetHeight', 'get').and.returnValue(600);
    component.onResize();
    expect(component.view).toEqual([800, 600]);
  });
});
