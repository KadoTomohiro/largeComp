import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1745Component } from './comp1745.component';

describe('Comp1745Component', () => {
  let component: Comp1745Component;
  let fixture: ComponentFixture<Comp1745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
