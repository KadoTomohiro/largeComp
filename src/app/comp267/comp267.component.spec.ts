import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp267Component } from './comp267.component';

describe('Comp267Component', () => {
  let component: Comp267Component;
  let fixture: ComponentFixture<Comp267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
