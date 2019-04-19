import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1169Component } from './comp1169.component';

describe('Comp1169Component', () => {
  let component: Comp1169Component;
  let fixture: ComponentFixture<Comp1169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
