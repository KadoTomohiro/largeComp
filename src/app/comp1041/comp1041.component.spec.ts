import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1041Component } from './comp1041.component';

describe('Comp1041Component', () => {
  let component: Comp1041Component;
  let fixture: ComponentFixture<Comp1041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
