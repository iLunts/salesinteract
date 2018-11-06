import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOffersListComponent } from './open-offers-list.component';

describe('OpenOffersListComponent', () => {
  let component: OpenOffersListComponent;
  let fixture: ComponentFixture<OpenOffersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenOffersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
