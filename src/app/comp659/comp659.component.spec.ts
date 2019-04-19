import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp659Component } from './comp659.component';

describe('Comp659Component', () => {
  let component: Comp659Component;
  let fixture: ComponentFixture<Comp659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
