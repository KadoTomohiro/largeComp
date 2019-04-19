import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1676Component } from './comp1676.component';

describe('Comp1676Component', () => {
  let component: Comp1676Component;
  let fixture: ComponentFixture<Comp1676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
