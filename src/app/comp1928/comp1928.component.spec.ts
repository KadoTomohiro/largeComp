import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1928Component } from './comp1928.component';

describe('Comp1928Component', () => {
  let component: Comp1928Component;
  let fixture: ComponentFixture<Comp1928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
