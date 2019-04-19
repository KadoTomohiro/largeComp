import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1787Component } from './comp1787.component';

describe('Comp1787Component', () => {
  let component: Comp1787Component;
  let fixture: ComponentFixture<Comp1787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
