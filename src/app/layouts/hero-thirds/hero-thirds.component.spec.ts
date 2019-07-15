import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroThirdsComponent } from './hero-thirds.component';

describe('HeroThirdsComponent', () => {
  let component: HeroThirdsComponent;
  let fixture: ComponentFixture<HeroThirdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroThirdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroThirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
