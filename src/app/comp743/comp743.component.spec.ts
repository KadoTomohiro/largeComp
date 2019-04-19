import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp743Component } from './comp743.component';

describe('Comp743Component', () => {
  let component: Comp743Component;
  let fixture: ComponentFixture<Comp743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
