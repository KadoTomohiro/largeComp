import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1697Component } from './comp1697.component';

describe('Comp1697Component', () => {
  let component: Comp1697Component;
  let fixture: ComponentFixture<Comp1697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
