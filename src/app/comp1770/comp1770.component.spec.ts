import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1770Component } from './comp1770.component';

describe('Comp1770Component', () => {
  let component: Comp1770Component;
  let fixture: ComponentFixture<Comp1770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
