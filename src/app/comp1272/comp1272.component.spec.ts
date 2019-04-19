import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1272Component } from './comp1272.component';

describe('Comp1272Component', () => {
  let component: Comp1272Component;
  let fixture: ComponentFixture<Comp1272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
