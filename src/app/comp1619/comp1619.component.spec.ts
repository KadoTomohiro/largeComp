import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1619Component } from './comp1619.component';

describe('Comp1619Component', () => {
  let component: Comp1619Component;
  let fixture: ComponentFixture<Comp1619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
