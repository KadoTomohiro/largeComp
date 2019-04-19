import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1566Component } from './comp1566.component';

describe('Comp1566Component', () => {
  let component: Comp1566Component;
  let fixture: ComponentFixture<Comp1566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
