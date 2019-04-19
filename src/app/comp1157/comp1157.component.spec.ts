import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1157Component } from './comp1157.component';

describe('Comp1157Component', () => {
  let component: Comp1157Component;
  let fixture: ComponentFixture<Comp1157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
