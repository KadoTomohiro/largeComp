import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1886Component } from './comp1886.component';

describe('Comp1886Component', () => {
  let component: Comp1886Component;
  let fixture: ComponentFixture<Comp1886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
