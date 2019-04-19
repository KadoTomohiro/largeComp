import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1784Component } from './comp1784.component';

describe('Comp1784Component', () => {
  let component: Comp1784Component;
  let fixture: ComponentFixture<Comp1784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
