import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp425Component } from './comp425.component';

describe('Comp425Component', () => {
  let component: Comp425Component;
  let fixture: ComponentFixture<Comp425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
