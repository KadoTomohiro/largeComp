import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1561Component } from './comp1561.component';

describe('Comp1561Component', () => {
  let component: Comp1561Component;
  let fixture: ComponentFixture<Comp1561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
