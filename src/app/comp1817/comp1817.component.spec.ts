import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1817Component } from './comp1817.component';

describe('Comp1817Component', () => {
  let component: Comp1817Component;
  let fixture: ComponentFixture<Comp1817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
