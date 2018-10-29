import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCocTabComponent } from './search-coc-tab.component';

describe('SearchCocTabComponent', () => {
  let component: SearchCocTabComponent;
  let fixture: ComponentFixture<SearchCocTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCocTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCocTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
