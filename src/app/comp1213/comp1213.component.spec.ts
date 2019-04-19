import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1213Component } from './comp1213.component';

describe('Comp1213Component', () => {
  let component: Comp1213Component;
  let fixture: ComponentFixture<Comp1213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
