import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1400Component } from './comp1400.component';

describe('Comp1400Component', () => {
  let component: Comp1400Component;
  let fixture: ComponentFixture<Comp1400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
