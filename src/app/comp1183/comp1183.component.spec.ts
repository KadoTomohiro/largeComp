import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1183Component } from './comp1183.component';

describe('Comp1183Component', () => {
  let component: Comp1183Component;
  let fixture: ComponentFixture<Comp1183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
