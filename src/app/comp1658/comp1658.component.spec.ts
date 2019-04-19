import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1658Component } from './comp1658.component';

describe('Comp1658Component', () => {
  let component: Comp1658Component;
  let fixture: ComponentFixture<Comp1658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
