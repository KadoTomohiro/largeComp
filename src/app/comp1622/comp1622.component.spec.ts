import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1622Component } from './comp1622.component';

describe('Comp1622Component', () => {
  let component: Comp1622Component;
  let fixture: ComponentFixture<Comp1622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
