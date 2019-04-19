import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1184Component } from './comp1184.component';

describe('Comp1184Component', () => {
  let component: Comp1184Component;
  let fixture: ComponentFixture<Comp1184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
