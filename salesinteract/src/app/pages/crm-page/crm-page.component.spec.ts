import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPageComponent } from './crm-page.component';

describe('CrmPageComponent', () => {
  let component: CrmPageComponent;
  let fixture: ComponentFixture<CrmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
