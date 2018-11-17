import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOpenOffersComponent } from './sidebar-open-offers.component';

describe('SidebarOpenOffersComponent', () => {
  let component: SidebarOpenOffersComponent;
  let fixture: ComponentFixture<SidebarOpenOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarOpenOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOpenOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
