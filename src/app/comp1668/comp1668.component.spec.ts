import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1668Component } from './comp1668.component';

describe('Comp1668Component', () => {
  let component: Comp1668Component;
  let fixture: ComponentFixture<Comp1668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
