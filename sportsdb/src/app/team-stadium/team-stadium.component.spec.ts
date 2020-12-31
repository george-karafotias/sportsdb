import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStadiumComponent } from './team-stadium.component';

describe('TeamStadiumComponent', () => {
  let component: TeamStadiumComponent;
  let fixture: ComponentFixture<TeamStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStadiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
