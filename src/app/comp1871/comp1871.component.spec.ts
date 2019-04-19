import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1871Component } from './comp1871.component';

describe('Comp1871Component', () => {
  let component: Comp1871Component;
  let fixture: ComponentFixture<Comp1871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
