import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp164Component } from './comp164.component';

describe('Comp164Component', () => {
  let component: Comp164Component;
  let fixture: ComponentFixture<Comp164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
