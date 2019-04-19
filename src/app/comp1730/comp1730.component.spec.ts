import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1730Component } from './comp1730.component';

describe('Comp1730Component', () => {
  let component: Comp1730Component;
  let fixture: ComponentFixture<Comp1730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
