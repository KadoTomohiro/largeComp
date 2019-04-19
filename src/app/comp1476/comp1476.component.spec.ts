import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1476Component } from './comp1476.component';

describe('Comp1476Component', () => {
  let component: Comp1476Component;
  let fixture: ComponentFixture<Comp1476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
