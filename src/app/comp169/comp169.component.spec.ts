import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp169Component } from './comp169.component';

describe('Comp169Component', () => {
  let component: Comp169Component;
  let fixture: ComponentFixture<Comp169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
