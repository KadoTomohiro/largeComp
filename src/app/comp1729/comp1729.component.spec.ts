import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1729Component } from './comp1729.component';

describe('Comp1729Component', () => {
  let component: Comp1729Component;
  let fixture: ComponentFixture<Comp1729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
