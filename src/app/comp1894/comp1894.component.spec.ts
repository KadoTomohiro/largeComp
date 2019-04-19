import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1894Component } from './comp1894.component';

describe('Comp1894Component', () => {
  let component: Comp1894Component;
  let fixture: ComponentFixture<Comp1894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
