import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHistoryListComponent } from './task-history-list.component';

describe('TaskHistoryListComponent', () => {
  let component: TaskHistoryListComponent;
  let fixture: ComponentFixture<TaskHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
