import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1494Component } from './comp1494.component';

describe('Comp1494Component', () => {
  let component: Comp1494Component;
  let fixture: ComponentFixture<Comp1494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
