import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1879Component } from './comp1879.component';

describe('Comp1879Component', () => {
  let component: Comp1879Component;
  let fixture: ComponentFixture<Comp1879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
