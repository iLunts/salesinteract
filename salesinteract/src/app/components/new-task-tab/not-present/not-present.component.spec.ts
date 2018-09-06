import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPresentComponent } from './not-present.component';

describe('NotPresentComponent', () => {
  let component: NotPresentComponent;
  let fixture: ComponentFixture<NotPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
