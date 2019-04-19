import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1743Component } from './comp1743.component';

describe('Comp1743Component', () => {
  let component: Comp1743Component;
  let fixture: ComponentFixture<Comp1743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
