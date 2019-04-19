import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1987Component } from './comp1987.component';

describe('Comp1987Component', () => {
  let component: Comp1987Component;
  let fixture: ComponentFixture<Comp1987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
