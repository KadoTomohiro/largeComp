import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1050Component } from './comp1050.component';

describe('Comp1050Component', () => {
  let component: Comp1050Component;
  let fixture: ComponentFixture<Comp1050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
