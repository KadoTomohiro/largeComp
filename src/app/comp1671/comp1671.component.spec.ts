import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1671Component } from './comp1671.component';

describe('Comp1671Component', () => {
  let component: Comp1671Component;
  let fixture: ComponentFixture<Comp1671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
