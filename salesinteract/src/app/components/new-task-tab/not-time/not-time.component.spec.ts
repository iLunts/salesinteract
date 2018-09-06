import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotTimeComponent } from './not-time.component';

describe('NotTimeComponent', () => {
  let component: NotTimeComponent;
  let fixture: ComponentFixture<NotTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
