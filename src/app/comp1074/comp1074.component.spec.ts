import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1074Component } from './comp1074.component';

describe('Comp1074Component', () => {
  let component: Comp1074Component;
  let fixture: ComponentFixture<Comp1074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
