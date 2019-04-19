import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1815Component } from './comp1815.component';

describe('Comp1815Component', () => {
  let component: Comp1815Component;
  let fixture: ComponentFixture<Comp1815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
