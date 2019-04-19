import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1596Component } from './comp1596.component';

describe('Comp1596Component', () => {
  let component: Comp1596Component;
  let fixture: ComponentFixture<Comp1596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
