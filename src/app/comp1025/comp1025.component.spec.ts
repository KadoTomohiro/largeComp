import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1025Component } from './comp1025.component';

describe('Comp1025Component', () => {
  let component: Comp1025Component;
  let fixture: ComponentFixture<Comp1025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
