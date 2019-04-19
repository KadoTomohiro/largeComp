import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1076Component } from './comp1076.component';

describe('Comp1076Component', () => {
  let component: Comp1076Component;
  let fixture: ComponentFixture<Comp1076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
