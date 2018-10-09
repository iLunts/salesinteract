import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTextFieldComponent } from './survey-text-field.component';

describe('SurveyTextFieldComponent', () => {
  let component: SurveyTextFieldComponent;
  let fixture: ComponentFixture<SurveyTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
