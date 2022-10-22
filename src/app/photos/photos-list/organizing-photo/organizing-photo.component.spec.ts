import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingPhotoComponent } from './organizing-photo.component';

describe('OrganizingPhotoComponent', () => {
  let component: OrganizingPhotoComponent;
  let fixture: ComponentFixture<OrganizingPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizingPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
