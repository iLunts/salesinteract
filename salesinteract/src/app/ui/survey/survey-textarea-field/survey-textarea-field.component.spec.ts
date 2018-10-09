import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTextareaFieldComponent } from './survey-textarea-field.component';

describe('SurveyTextareaFieldComponent', () => {
  let component: SurveyTextareaFieldComponent;
  let fixture: ComponentFixture<SurveyTextareaFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyTextareaFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyTextareaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
