import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1961Component } from './comp1961.component';

describe('Comp1961Component', () => {
  let component: Comp1961Component;
  let fixture: ComponentFixture<Comp1961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
