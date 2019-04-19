import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1988Component } from './comp1988.component';

describe('Comp1988Component', () => {
  let component: Comp1988Component;
  let fixture: ComponentFixture<Comp1988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
