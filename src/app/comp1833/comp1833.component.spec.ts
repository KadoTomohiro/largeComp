import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1833Component } from './comp1833.component';

describe('Comp1833Component', () => {
  let component: Comp1833Component;
  let fixture: ComponentFixture<Comp1833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
