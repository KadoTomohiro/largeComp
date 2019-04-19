import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1799Component } from './comp1799.component';

describe('Comp1799Component', () => {
  let component: Comp1799Component;
  let fixture: ComponentFixture<Comp1799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
