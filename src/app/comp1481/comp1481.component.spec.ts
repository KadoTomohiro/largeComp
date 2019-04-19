import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1481Component } from './comp1481.component';

describe('Comp1481Component', () => {
  let component: Comp1481Component;
  let fixture: ComponentFixture<Comp1481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
