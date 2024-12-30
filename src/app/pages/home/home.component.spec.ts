import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {OlympicService} from "../../core/services/olympic/olympic.service";
import olympicsMockData from "../../../test/mockData/olympicsDataMock";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const toastServiceMock = jasmine.createSpyObj('ToastrService', ['error']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule],
      providers: [
        {provide: ToastrService, useValue: toastServiceMock},
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              params: {'id': '123'}
            }
          }
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
