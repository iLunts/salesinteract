import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewsPageComponent } from './quick-views-page.component';

describe('QuickViewsPageComponent', () => {
  let component: QuickViewsPageComponent;
  let fixture: ComponentFixture<QuickViewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickViewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickViewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
