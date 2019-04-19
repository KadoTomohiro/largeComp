import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1724Component } from './comp1724.component';

describe('Comp1724Component', () => {
  let component: Comp1724Component;
  let fixture: ComponentFixture<Comp1724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
