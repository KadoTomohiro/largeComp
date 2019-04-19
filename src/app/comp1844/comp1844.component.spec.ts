import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1844Component } from './comp1844.component';

describe('Comp1844Component', () => {
  let component: Comp1844Component;
  let fixture: ComponentFixture<Comp1844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
