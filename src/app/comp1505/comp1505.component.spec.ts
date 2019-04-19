import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1505Component } from './comp1505.component';

describe('Comp1505Component', () => {
  let component: Comp1505Component;
  let fixture: ComponentFixture<Comp1505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
