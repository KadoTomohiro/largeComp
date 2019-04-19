import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1788Component } from './comp1788.component';

describe('Comp1788Component', () => {
  let component: Comp1788Component;
  let fixture: ComponentFixture<Comp1788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
