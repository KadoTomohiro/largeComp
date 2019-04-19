import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1429Component } from './comp1429.component';

describe('Comp1429Component', () => {
  let component: Comp1429Component;
  let fixture: ComponentFixture<Comp1429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
