import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitCenteredComponent } from './split-centered.component';

describe('SplitCenteredComponent', () => {
  let component: SplitCenteredComponent;
  let fixture: ComponentFixture<SplitCenteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitCenteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitCenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
