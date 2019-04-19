import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1069Component } from './comp1069.component';

describe('Comp1069Component', () => {
  let component: Comp1069Component;
  let fixture: ComponentFixture<Comp1069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
