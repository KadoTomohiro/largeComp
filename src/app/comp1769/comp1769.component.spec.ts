import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1769Component } from './comp1769.component';

describe('Comp1769Component', () => {
  let component: Comp1769Component;
  let fixture: ComponentFixture<Comp1769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
