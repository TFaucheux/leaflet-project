import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdsGridComponent } from './thirds-grid.component';

describe('ThirdsGridComponent', () => {
  let component: ThirdsGridComponent;
  let fixture: ComponentFixture<ThirdsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
