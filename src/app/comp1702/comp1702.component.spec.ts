import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1702Component } from './comp1702.component';

describe('Comp1702Component', () => {
  let component: Comp1702Component;
  let fixture: ComponentFixture<Comp1702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
