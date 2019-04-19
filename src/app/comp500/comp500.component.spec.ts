import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp500Component } from './comp500.component';

describe('Comp500Component', () => {
  let component: Comp500Component;
  let fixture: ComponentFixture<Comp500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
