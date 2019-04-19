import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1094Component } from './comp1094.component';

describe('Comp1094Component', () => {
  let component: Comp1094Component;
  let fixture: ComponentFixture<Comp1094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
