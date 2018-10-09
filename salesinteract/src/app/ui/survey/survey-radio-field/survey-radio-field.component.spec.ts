import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRadioFieldComponent } from './survey-radio-field.component';

describe('SurveyRadioFieldComponent', () => {
  let component: SurveyRadioFieldComponent;
  let fixture: ComponentFixture<SurveyRadioFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyRadioFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyRadioFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
