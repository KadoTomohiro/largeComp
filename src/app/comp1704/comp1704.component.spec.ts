import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1704Component } from './comp1704.component';

describe('Comp1704Component', () => {
  let component: Comp1704Component;
  let fixture: ComponentFixture<Comp1704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
