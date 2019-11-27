import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSlideComponent } from './profile-slide.component';

describe('ProfileSlideComponent', () => {
  let component: ProfileSlideComponent;
  let fixture: ComponentFixture<ProfileSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
