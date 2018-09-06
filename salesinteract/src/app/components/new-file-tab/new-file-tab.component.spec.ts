import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFileTabComponent } from './new-file-tab.component';

describe('NewFileTabComponent', () => {
  let component: NewFileTabComponent;
  let fixture: ComponentFixture<NewFileTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFileTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
