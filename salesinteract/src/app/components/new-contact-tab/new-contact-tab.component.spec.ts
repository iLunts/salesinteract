import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactTabComponent } from './new-contact-tab.component';

describe('NewContactTabComponent', () => {
  let component: NewContactTabComponent;
  let fixture: ComponentFixture<NewContactTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
