import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1458Component } from './comp1458.component';

describe('Comp1458Component', () => {
  let component: Comp1458Component;
  let fixture: ComponentFixture<Comp1458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
