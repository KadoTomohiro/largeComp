import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1643Component } from './comp1643.component';

describe('Comp1643Component', () => {
  let component: Comp1643Component;
  let fixture: ComponentFixture<Comp1643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
