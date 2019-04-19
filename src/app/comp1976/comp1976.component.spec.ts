import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1976Component } from './comp1976.component';

describe('Comp1976Component', () => {
  let component: Comp1976Component;
  let fixture: ComponentFixture<Comp1976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
