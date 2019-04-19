import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1715Component } from './comp1715.component';

describe('Comp1715Component', () => {
  let component: Comp1715Component;
  let fixture: ComponentFixture<Comp1715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
