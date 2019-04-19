import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1408Component } from './comp1408.component';

describe('Comp1408Component', () => {
  let component: Comp1408Component;
  let fixture: ComponentFixture<Comp1408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
