import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1749Component } from './comp1749.component';

describe('Comp1749Component', () => {
  let component: Comp1749Component;
  let fixture: ComponentFixture<Comp1749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
