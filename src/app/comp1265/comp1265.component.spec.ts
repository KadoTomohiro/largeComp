import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1265Component } from './comp1265.component';

describe('Comp1265Component', () => {
  let component: Comp1265Component;
  let fixture: ComponentFixture<Comp1265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
