import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1967Component } from './comp1967.component';

describe('Comp1967Component', () => {
  let component: Comp1967Component;
  let fixture: ComponentFixture<Comp1967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
