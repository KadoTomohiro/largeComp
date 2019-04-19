import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp588Component } from './comp588.component';

describe('Comp588Component', () => {
  let component: Comp588Component;
  let fixture: ComponentFixture<Comp588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
