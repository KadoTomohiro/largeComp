import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1054Component } from './comp1054.component';

describe('Comp1054Component', () => {
  let component: Comp1054Component;
  let fixture: ComponentFixture<Comp1054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
