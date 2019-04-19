import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1604Component } from './comp1604.component';

describe('Comp1604Component', () => {
  let component: Comp1604Component;
  let fixture: ComponentFixture<Comp1604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
