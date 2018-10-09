import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOnlineComponent } from './social-online.component';

describe('SocialOnlineComponent', () => {
  let component: SocialOnlineComponent;
  let fixture: ComponentFixture<SocialOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
