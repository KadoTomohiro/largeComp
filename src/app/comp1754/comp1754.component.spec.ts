import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1754Component } from './comp1754.component';

describe('Comp1754Component', () => {
  let component: Comp1754Component;
  let fixture: ComponentFixture<Comp1754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
