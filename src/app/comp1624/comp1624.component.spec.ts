import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1624Component } from './comp1624.component';

describe('Comp1624Component', () => {
  let component: Comp1624Component;
  let fixture: ComponentFixture<Comp1624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
