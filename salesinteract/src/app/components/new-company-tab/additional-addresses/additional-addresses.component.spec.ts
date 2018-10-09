import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAddressesComponent } from './additional-addresses.component';

describe('AdditionalAddressesComponent', () => {
  let component: AdditionalAddressesComponent;
  let fixture: ComponentFixture<AdditionalAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
