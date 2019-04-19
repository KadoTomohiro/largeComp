import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1591Component } from './comp1591.component';

describe('Comp1591Component', () => {
  let component: Comp1591Component;
  let fixture: ComponentFixture<Comp1591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
