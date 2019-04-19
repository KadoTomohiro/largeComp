import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp416Component } from './comp416.component';

describe('Comp416Component', () => {
  let component: Comp416Component;
  let fixture: ComponentFixture<Comp416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
