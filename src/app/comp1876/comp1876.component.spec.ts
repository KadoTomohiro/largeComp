import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1876Component } from './comp1876.component';

describe('Comp1876Component', () => {
  let component: Comp1876Component;
  let fixture: ComponentFixture<Comp1876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
