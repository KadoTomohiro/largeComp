import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1463Component } from './comp1463.component';

describe('Comp1463Component', () => {
  let component: Comp1463Component;
  let fixture: ComponentFixture<Comp1463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
