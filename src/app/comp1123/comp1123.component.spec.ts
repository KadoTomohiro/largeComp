import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1123Component } from './comp1123.component';

describe('Comp1123Component', () => {
  let component: Comp1123Component;
  let fixture: ComponentFixture<Comp1123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
