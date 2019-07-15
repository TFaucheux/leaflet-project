import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterGridComponent } from './quarter-grid.component';

describe('QuarterGridComponent', () => {
  let component: QuarterGridComponent;
  let fixture: ComponentFixture<QuarterGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
