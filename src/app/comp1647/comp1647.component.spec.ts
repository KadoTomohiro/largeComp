import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1647Component } from './comp1647.component';

describe('Comp1647Component', () => {
  let component: Comp1647Component;
  let fixture: ComponentFixture<Comp1647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
