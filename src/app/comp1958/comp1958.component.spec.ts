import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1958Component } from './comp1958.component';

describe('Comp1958Component', () => {
  let component: Comp1958Component;
  let fixture: ComponentFixture<Comp1958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
