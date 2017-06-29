import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHolidayMoviesComponent } from './all-holiday-movies.component';

describe('AllHolidayMoviesComponent', () => {
  let component: AllHolidayMoviesComponent;
  let fixture: ComponentFixture<AllHolidayMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHolidayMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHolidayMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
