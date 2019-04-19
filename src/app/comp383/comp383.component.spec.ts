import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp383Component } from './comp383.component';

describe('Comp383Component', () => {
  let component: Comp383Component;
  let fixture: ComponentFixture<Comp383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
