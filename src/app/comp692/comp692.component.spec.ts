import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp692Component } from './comp692.component';

describe('Comp692Component', () => {
  let component: Comp692Component;
  let fixture: ComponentFixture<Comp692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
