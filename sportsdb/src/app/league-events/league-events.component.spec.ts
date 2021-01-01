import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueEventsComponent } from './league-events.component';

describe('LeagueEventsComponent', () => {
  let component: LeagueEventsComponent;
  let fixture: ComponentFixture<LeagueEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
