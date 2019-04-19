import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp205Component } from './comp205.component';

describe('Comp205Component', () => {
  let component: Comp205Component;
  let fixture: ComponentFixture<Comp205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});