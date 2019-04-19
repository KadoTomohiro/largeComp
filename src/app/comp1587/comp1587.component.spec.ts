import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1587Component } from './comp1587.component';

describe('Comp1587Component', () => {
  let component: Comp1587Component;
  let fixture: ComponentFixture<Comp1587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
