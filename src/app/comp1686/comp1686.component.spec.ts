import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1686Component } from './comp1686.component';

describe('Comp1686Component', () => {
  let component: Comp1686Component;
  let fixture: ComponentFixture<Comp1686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
