import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskFollowupTabComponent } from './new-task-followup-tab.component';

describe('NewTaskFollowupTabComponent', () => {
  let component: NewTaskFollowupTabComponent;
  let fixture: ComponentFixture<NewTaskFollowupTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskFollowupTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskFollowupTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
