import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1564Component } from './comp1564.component';

describe('Comp1564Component', () => {
  let component: Comp1564Component;
  let fixture: ComponentFixture<Comp1564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
