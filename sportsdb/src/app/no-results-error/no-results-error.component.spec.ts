import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsErrorComponent } from './no-results-error.component';

describe('NoResultsErrorComponent', () => {
  let component: NoResultsErrorComponent;
  let fixture: ComponentFixture<NoResultsErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoResultsErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResultsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
