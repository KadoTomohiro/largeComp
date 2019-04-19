import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1551Component } from './comp1551.component';

describe('Comp1551Component', () => {
  let component: Comp1551Component;
  let fixture: ComponentFixture<Comp1551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
