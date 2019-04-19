import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1559Component } from './comp1559.component';

describe('Comp1559Component', () => {
  let component: Comp1559Component;
  let fixture: ComponentFixture<Comp1559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
