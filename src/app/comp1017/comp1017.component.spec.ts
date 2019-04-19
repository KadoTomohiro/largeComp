import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1017Component } from './comp1017.component';

describe('Comp1017Component', () => {
  let component: Comp1017Component;
  let fixture: ComponentFixture<Comp1017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
