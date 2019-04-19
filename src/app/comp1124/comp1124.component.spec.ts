import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1124Component } from './comp1124.component';

describe('Comp1124Component', () => {
  let component: Comp1124Component;
  let fixture: ComponentFixture<Comp1124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
