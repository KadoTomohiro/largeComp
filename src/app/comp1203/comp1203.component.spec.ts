import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1203Component } from './comp1203.component';

describe('Comp1203Component', () => {
  let component: Comp1203Component;
  let fixture: ComponentFixture<Comp1203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
