import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCheckboxFieldComponent } from './survey-checkbox-field.component';

describe('SurveyCheckboxFieldComponent', () => {
  let component: SurveyCheckboxFieldComponent;
  let fixture: ComponentFixture<SurveyCheckboxFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCheckboxFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
