import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1781Component } from './comp1781.component';

describe('Comp1781Component', () => {
  let component: Comp1781Component;
  let fixture: ComponentFixture<Comp1781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
