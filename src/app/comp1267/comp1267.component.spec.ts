import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1267Component } from './comp1267.component';

describe('Comp1267Component', () => {
  let component: Comp1267Component;
  let fixture: ComponentFixture<Comp1267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
