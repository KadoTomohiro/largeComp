import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1139Component } from './comp1139.component';

describe('Comp1139Component', () => {
  let component: Comp1139Component;
  let fixture: ComponentFixture<Comp1139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
