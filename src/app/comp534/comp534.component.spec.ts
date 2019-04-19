import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp534Component } from './comp534.component';

describe('Comp534Component', () => {
  let component: Comp534Component;
  let fixture: ComponentFixture<Comp534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
