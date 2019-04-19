import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1695Component } from './comp1695.component';

describe('Comp1695Component', () => {
  let component: Comp1695Component;
  let fixture: ComponentFixture<Comp1695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
