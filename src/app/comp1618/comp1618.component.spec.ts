import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1618Component } from './comp1618.component';

describe('Comp1618Component', () => {
  let component: Comp1618Component;
  let fixture: ComponentFixture<Comp1618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
