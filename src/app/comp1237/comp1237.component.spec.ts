import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1237Component } from './comp1237.component';

describe('Comp1237Component', () => {
  let component: Comp1237Component;
  let fixture: ComponentFixture<Comp1237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
