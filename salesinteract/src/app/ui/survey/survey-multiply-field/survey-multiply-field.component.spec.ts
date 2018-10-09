import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyMultiplyFieldComponent } from './survey-multiply-field.component';

describe('SurveyMultiplyFieldComponent', () => {
  let component: SurveyMultiplyFieldComponent;
  let fixture: ComponentFixture<SurveyMultiplyFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyMultiplyFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyMultiplyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
