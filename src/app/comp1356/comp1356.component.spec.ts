import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1356Component } from './comp1356.component';

describe('Comp1356Component', () => {
  let component: Comp1356Component;
  let fixture: ComponentFixture<Comp1356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
