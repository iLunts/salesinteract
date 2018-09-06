import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNewFileComponent } from './upload-new-file.component';

describe('UploadNewFileComponent', () => {
  let component: UploadNewFileComponent;
  let fixture: ComponentFixture<UploadNewFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadNewFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadNewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
