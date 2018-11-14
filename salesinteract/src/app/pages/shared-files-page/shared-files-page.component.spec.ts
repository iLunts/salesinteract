import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFilesPageComponent } from './shared-files-page.component';

describe('SharedFilesPageComponent', () => {
  let component: SharedFilesPageComponent;
  let fixture: ComponentFixture<SharedFilesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedFilesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
