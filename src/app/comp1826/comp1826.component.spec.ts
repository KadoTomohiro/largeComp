import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1826Component } from './comp1826.component';

describe('Comp1826Component', () => {
  let component: Comp1826Component;
  let fixture: ComponentFixture<Comp1826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
