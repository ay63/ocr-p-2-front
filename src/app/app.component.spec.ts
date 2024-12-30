import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {ToastrService} from "ngx-toastr";
import {OlympicService} from "./core/services/olympic/olympic.service";
import {HeaderComponent} from "./pages/header/header.component";
import {LoaderComponent} from "./pages/loader/loader.component";

describe('AppComponent', () => {
  let olympicServiceSpy: jasmine.SpyObj<OlympicService>;

  beforeEach(async () => {
    const olympicServiceMock = jasmine.createSpyObj('OlympicService', ['getOlympics', 'loadInitialData']);
    const toastServiceMock = jasmine.createSpyObj('ToastrService', ['error']);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HeaderComponent,
        LoaderComponent
      ],
      providers: [
        {provide: OlympicService, useValue: olympicServiceMock},
        {provide: ToastrService, useValue: toastServiceMock},
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'olympic-games-starter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('olympic-games-starter');
  });
});
