import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1420Component } from './comp1420.component';

describe('Comp1420Component', () => {
  let component: Comp1420Component;
  let fixture: ComponentFixture<Comp1420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
