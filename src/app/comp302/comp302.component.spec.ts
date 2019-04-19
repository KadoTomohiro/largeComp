import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp302Component } from './comp302.component';

describe('Comp302Component', () => {
  let component: Comp302Component;
  let fixture: ComponentFixture<Comp302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
