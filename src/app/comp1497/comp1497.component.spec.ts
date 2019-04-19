import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1497Component } from './comp1497.component';

describe('Comp1497Component', () => {
  let component: Comp1497Component;
  let fixture: ComponentFixture<Comp1497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
