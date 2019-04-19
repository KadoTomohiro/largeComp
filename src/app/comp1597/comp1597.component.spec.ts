import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1597Component } from './comp1597.component';

describe('Comp1597Component', () => {
  let component: Comp1597Component;
  let fixture: ComponentFixture<Comp1597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
