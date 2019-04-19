import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp483Component } from './comp483.component';

describe('Comp483Component', () => {
  let component: Comp483Component;
  let fixture: ComponentFixture<Comp483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
