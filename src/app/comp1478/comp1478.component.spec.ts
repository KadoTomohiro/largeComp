import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1478Component } from './comp1478.component';

describe('Comp1478Component', () => {
  let component: Comp1478Component;
  let fixture: ComponentFixture<Comp1478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
