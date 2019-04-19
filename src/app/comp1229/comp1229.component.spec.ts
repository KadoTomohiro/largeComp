import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1229Component } from './comp1229.component';

describe('Comp1229Component', () => {
  let component: Comp1229Component;
  let fixture: ComponentFixture<Comp1229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
