import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1760Component } from './comp1760.component';

describe('Comp1760Component', () => {
  let component: Comp1760Component;
  let fixture: ComponentFixture<Comp1760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
