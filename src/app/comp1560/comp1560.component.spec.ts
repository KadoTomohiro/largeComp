import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1560Component } from './comp1560.component';

describe('Comp1560Component', () => {
  let component: Comp1560Component;
  let fixture: ComponentFixture<Comp1560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
