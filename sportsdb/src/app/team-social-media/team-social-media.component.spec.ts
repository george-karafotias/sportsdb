import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSocialMediaComponent } from './team-social-media.component';

describe('TeamSocialMediaComponent', () => {
  let component: TeamSocialMediaComponent;
  let fixture: ComponentFixture<TeamSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
