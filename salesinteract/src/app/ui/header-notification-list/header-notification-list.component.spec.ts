import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotificationListComponent } from './header-notification-list.component';

describe('HeaderNotificationListComponent', () => {
  let component: HeaderNotificationListComponent;
  let fixture: ComponentFixture<HeaderNotificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNotificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
