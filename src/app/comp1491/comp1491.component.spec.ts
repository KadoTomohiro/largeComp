import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1491Component } from './comp1491.component';

describe('Comp1491Component', () => {
  let component: Comp1491Component;
  let fixture: ComponentFixture<Comp1491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
