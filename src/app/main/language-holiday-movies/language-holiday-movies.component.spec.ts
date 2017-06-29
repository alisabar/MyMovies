import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageHolidayMoviesComponent } from './language-holiday-movies.component';

describe('LanguageHolidayMoviesComponent', () => {
  let component: LanguageHolidayMoviesComponent;
  let fixture: ComponentFixture<LanguageHolidayMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageHolidayMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageHolidayMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
