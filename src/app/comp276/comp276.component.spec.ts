import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp276Component } from './comp276.component';

describe('Comp276Component', () => {
  let component: Comp276Component;
  let fixture: ComponentFixture<Comp276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
