import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp650Component } from './comp650.component';

describe('Comp650Component', () => {
  let component: Comp650Component;
  let fixture: ComponentFixture<Comp650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
