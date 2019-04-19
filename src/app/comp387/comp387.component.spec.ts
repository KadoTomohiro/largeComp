import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp387Component } from './comp387.component';

describe('Comp387Component', () => {
  let component: Comp387Component;
  let fixture: ComponentFixture<Comp387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
