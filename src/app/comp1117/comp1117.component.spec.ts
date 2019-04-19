import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1117Component } from './comp1117.component';

describe('Comp1117Component', () => {
  let component: Comp1117Component;
  let fixture: ComponentFixture<Comp1117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
