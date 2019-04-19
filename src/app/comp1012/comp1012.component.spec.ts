import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1012Component } from './comp1012.component';

describe('Comp1012Component', () => {
  let component: Comp1012Component;
  let fixture: ComponentFixture<Comp1012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
