import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTaskHistoryComponent } from './sidebar-task-history.component';

describe('SidebarTaskHistoryComponent', () => {
  let component: SidebarTaskHistoryComponent;
  let fixture: ComponentFixture<SidebarTaskHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTaskHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTaskHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
