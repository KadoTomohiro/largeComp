import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1299Component } from './comp1299.component';

describe('Comp1299Component', () => {
  let component: Comp1299Component;
  let fixture: ComponentFixture<Comp1299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
