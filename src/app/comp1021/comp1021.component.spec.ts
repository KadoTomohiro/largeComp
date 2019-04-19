import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1021Component } from './comp1021.component';

describe('Comp1021Component', () => {
  let component: Comp1021Component;
  let fixture: ComponentFixture<Comp1021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
