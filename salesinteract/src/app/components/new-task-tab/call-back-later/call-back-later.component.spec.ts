import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBackLaterComponent } from './call-back-later.component';

describe('CallBackLaterComponent', () => {
  let component: CallBackLaterComponent;
  let fixture: ComponentFixture<CallBackLaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallBackLaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBackLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
