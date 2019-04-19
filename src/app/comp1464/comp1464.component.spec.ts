import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1464Component } from './comp1464.component';

describe('Comp1464Component', () => {
  let component: Comp1464Component;
  let fixture: ComponentFixture<Comp1464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
