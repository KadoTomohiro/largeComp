import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1962Component } from './comp1962.component';

describe('Comp1962Component', () => {
  let component: Comp1962Component;
  let fixture: ComponentFixture<Comp1962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
