import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessageTabComponent } from './new-message-tab.component';

describe('NewMessageTabComponent', () => {
  let component: NewMessageTabComponent;
  let fixture: ComponentFixture<NewMessageTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessageTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
