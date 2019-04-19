import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1674Component } from './comp1674.component';

describe('Comp1674Component', () => {
  let component: Comp1674Component;
  let fixture: ComponentFixture<Comp1674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
