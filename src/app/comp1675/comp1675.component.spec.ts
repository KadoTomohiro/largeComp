import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1675Component } from './comp1675.component';

describe('Comp1675Component', () => {
  let component: Comp1675Component;
  let fixture: ComponentFixture<Comp1675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
