import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1954Component } from './comp1954.component';

describe('Comp1954Component', () => {
  let component: Comp1954Component;
  let fixture: ComponentFixture<Comp1954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
