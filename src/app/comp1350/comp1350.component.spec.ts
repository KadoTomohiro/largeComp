import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1350Component } from './comp1350.component';

describe('Comp1350Component', () => {
  let component: Comp1350Component;
  let fixture: ComponentFixture<Comp1350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
