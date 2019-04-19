import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1197Component } from './comp1197.component';

describe('Comp1197Component', () => {
  let component: Comp1197Component;
  let fixture: ComponentFixture<Comp1197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
