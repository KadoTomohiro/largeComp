import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1626Component } from './comp1626.component';

describe('Comp1626Component', () => {
  let component: Comp1626Component;
  let fixture: ComponentFixture<Comp1626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
