import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1362Component } from './comp1362.component';

describe('Comp1362Component', () => {
  let component: Comp1362Component;
  let fixture: ComponentFixture<Comp1362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
