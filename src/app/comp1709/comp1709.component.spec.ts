import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1709Component } from './comp1709.component';

describe('Comp1709Component', () => {
  let component: Comp1709Component;
  let fixture: ComponentFixture<Comp1709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
