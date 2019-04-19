import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1798Component } from './comp1798.component';

describe('Comp1798Component', () => {
  let component: Comp1798Component;
  let fixture: ComponentFixture<Comp1798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
