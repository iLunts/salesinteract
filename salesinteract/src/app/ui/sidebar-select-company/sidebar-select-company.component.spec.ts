import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSelectCompanyComponent } from './sidebar-select-company.component';

describe('SidebarSelectCompanyComponent', () => {
  let component: SidebarSelectCompanyComponent;
  let fixture: ComponentFixture<SidebarSelectCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSelectCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSelectCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
