import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1951Component } from './comp1951.component';

describe('Comp1951Component', () => {
  let component: Comp1951Component;
  let fixture: ComponentFixture<Comp1951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
