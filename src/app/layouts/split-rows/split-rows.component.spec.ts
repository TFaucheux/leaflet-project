import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitRowsComponent } from './split-rows.component';

describe('SplitRowsComponent', () => {
  let component: SplitRowsComponent;
  let fixture: ComponentFixture<SplitRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
