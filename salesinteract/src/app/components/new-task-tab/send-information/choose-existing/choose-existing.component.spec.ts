import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseExistingComponent } from './choose-existing.component';

describe('ChooseExistingComponent', () => {
  let component: ChooseExistingComponent;
  let fixture: ComponentFixture<ChooseExistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseExistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
