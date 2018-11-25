import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNotificationListComponent } from './system-notification-list.component';

describe('SystemNotificationListComponent', () => {
  let component: SystemNotificationListComponent;
  let fixture: ComponentFixture<SystemNotificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemNotificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNotificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
