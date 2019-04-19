import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1549Component } from './comp1549.component';

describe('Comp1549Component', () => {
  let component: Comp1549Component;
  let fixture: ComponentFixture<Comp1549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
