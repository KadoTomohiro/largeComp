import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1176Component } from './comp1176.component';

describe('Comp1176Component', () => {
  let component: Comp1176Component;
  let fixture: ComponentFixture<Comp1176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
