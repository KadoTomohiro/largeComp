import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1694Component } from './comp1694.component';

describe('Comp1694Component', () => {
  let component: Comp1694Component;
  let fixture: ComponentFixture<Comp1694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
