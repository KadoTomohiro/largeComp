import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1805Component } from './comp1805.component';

describe('Comp1805Component', () => {
  let component: Comp1805Component;
  let fixture: ComponentFixture<Comp1805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
