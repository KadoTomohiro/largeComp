import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1717Component } from './comp1717.component';

describe('Comp1717Component', () => {
  let component: Comp1717Component;
  let fixture: ComponentFixture<Comp1717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
