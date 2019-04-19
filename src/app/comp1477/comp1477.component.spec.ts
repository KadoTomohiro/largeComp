import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1477Component } from './comp1477.component';

describe('Comp1477Component', () => {
  let component: Comp1477Component;
  let fixture: ComponentFixture<Comp1477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
