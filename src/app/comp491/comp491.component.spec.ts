import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp491Component } from './comp491.component';

describe('Comp491Component', () => {
  let component: Comp491Component;
  let fixture: ComponentFixture<Comp491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
