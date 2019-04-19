import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1948Component } from './comp1948.component';

describe('Comp1948Component', () => {
  let component: Comp1948Component;
  let fixture: ComponentFixture<Comp1948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
