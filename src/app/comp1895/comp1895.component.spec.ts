import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1895Component } from './comp1895.component';

describe('Comp1895Component', () => {
  let component: Comp1895Component;
  let fixture: ComponentFixture<Comp1895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
