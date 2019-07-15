import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAndOneComponent } from './two-and-one.component';

describe('TwoAndOneComponent', () => {
  let component: TwoAndOneComponent;
  let fixture: ComponentFixture<TwoAndOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoAndOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoAndOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
