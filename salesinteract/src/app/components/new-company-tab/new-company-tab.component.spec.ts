import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompanyTabComponent } from './new-company-tab.component';

describe('NewCompanyTabComponent', () => {
  let component: NewCompanyTabComponent;
  let fixture: ComponentFixture<NewCompanyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCompanyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompanyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
