import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp758Component } from './comp758.component';

describe('Comp758Component', () => {
  let component: Comp758Component;
  let fixture: ComponentFixture<Comp758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
