import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorComponent } from './http-error.component';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('NotFoundComponent', () => {
  let component: HttpErrorComponent;
  let fixture: ComponentFixture<HttpErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{id: 1}]),
          },
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
