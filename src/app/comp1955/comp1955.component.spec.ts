import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1955Component } from './comp1955.component';

describe('Comp1955Component', () => {
  let component: Comp1955Component;
  let fixture: ComponentFixture<Comp1955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
