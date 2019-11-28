import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentProfilesComponent } from './department-profiles.component';

describe('DepartmentProfilesComponent', () => {
  let component: DepartmentProfilesComponent;
  let fixture: ComponentFixture<DepartmentProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
