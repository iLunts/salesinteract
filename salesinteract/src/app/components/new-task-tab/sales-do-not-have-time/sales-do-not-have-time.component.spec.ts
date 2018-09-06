import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDoNotHaveTimeComponent } from './sales-do-not-have-time.component';

describe('SalesDoNotHaveTimeComponent', () => {
  let component: SalesDoNotHaveTimeComponent;
  let fixture: ComponentFixture<SalesDoNotHaveTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesDoNotHaveTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDoNotHaveTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
