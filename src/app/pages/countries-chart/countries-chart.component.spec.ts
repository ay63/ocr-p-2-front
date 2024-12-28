import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CountriesChartComponent} from './countries-chart.component';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ElementRef} from '@angular/core';

describe('CountriesChartComponent', () => {
  let component: CountriesChartComponent;
  let fixture: ComponentFixture<CountriesChartComponent>;
  let toastServiceSpy: jasmine.SpyObj<ToastrService>;
  let routerSpy: jasmine.SpyObj<Router>;

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

    toastServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
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

  it('should navigate to the correct URL on onSelect',  () => {
    const mockData = {extra: {id: 42}};
    routerSpy.navigateByUrl.and.returnValue(Promise.resolve(true));
    component.onSelect(mockData);
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('country-detail-chart/42');
  });

  it('should show an error message if navigation fails in onSelect', async () => {
    const mockError = 'Navigation Error';
    routerSpy.navigateByUrl.and.returnValue(Promise.reject(mockError));
    await component.onSelect({extra: {id: 42}});
    expect(toastServiceSpy.error).toHaveBeenCalledWith(mockError);
  });


  it('should set view dimensions correctly when resizing for small width', () => {
    spyOnProperty(component.containerRef.nativeElement, 'offsetWidth', 'get').and.returnValue(399);
    component.resizeChart();
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
    component.resizeChart();
    expect(component.view).toEqual([800, 600]);
  });
});
