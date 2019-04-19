import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1449Component } from './comp1449.component';

describe('Comp1449Component', () => {
  let component: Comp1449Component;
  let fixture: ComponentFixture<Comp1449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
