import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp281Component } from './comp281.component';

describe('Comp281Component', () => {
  let component: Comp281Component;
  let fixture: ComponentFixture<Comp281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
