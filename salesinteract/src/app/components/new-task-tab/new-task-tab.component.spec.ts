import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskTabComponent } from './new-task-tab.component';

describe('NewTaskTabComponent', () => {
  let component: NewTaskTabComponent;
  let fixture: ComponentFixture<NewTaskTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
